"""Build the public resume from the same approved profile used by the site.

Run with Python 3 and reportlab installed. No phone number or precise location
belongs in content/profile.json. The output is committed; Vercel needs no Python.
"""
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
profile = json.loads((ROOT / "content/profile.json").read_text())
output = ROOT / "public/resume.pdf"
ink = colors.HexColor("#262820")
muted = colors.HexColor("#55594d")
styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=ink, spaceAfter=5),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=12, textColor=muted),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.3, leading=12, textColor=ink, spaceAfter=3),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=ink, spaceBefore=9, spaceAfter=5),
    "job": ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=9.6, leading=12, textColor=ink, spaceBefore=6, spaceAfter=2),
    "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.3, leading=10.5, textColor=muted, spaceAfter=3),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.3, leading=12, leftIndent=9, firstLineIndent=-9, textColor=ink, spaceAfter=3, alignment=TA_LEFT),
}

def clean(text):
    return escape(text.replace("–", "-").replace("—", "-").replace("·", " | "))

def paragraph(text, style="body"):
    return Paragraph(clean(text), styles[style])

story = [paragraph(profile["name"], "name")]
story.append(paragraph(profile["location"] + " | Open to relocation across the U.S.", "contact"))
links = [f'<link href="mailto:{profile["email"]}">{profile["email"]}</link>',
         '<link href="https://github.com/ixaxtav">github.com/ixaxtav</link>',
         '<link href="https://www.linkedin.com/in/ixaxtavarez">linkedin.com/in/ixaxtavarez</link>',
         '<link href="https://www.ixaxtavarez.com">ixaxtavarez.com</link>']
story.append(Paragraph(" | ".join(links), styles["contact"]))
story.extend([paragraph("PROFESSIONAL SUMMARY", "section"), paragraph(profile["summary"])])
story.append(paragraph("WORK EXPERIENCE", "section"))
for job in profile["jobs"]:
    heading_text = f'{job["company"]} | {job["period"]}' if job.get("progression") else f'{job["title"]}, {job["company"]} | {job["period"]}'
    heading = [paragraph(heading_text, "job")]
    if job.get("progression"):
        heading.append(paragraph(job["progression"], "small"))
    heading.append(paragraph("- " + job["bullets"][0], "bullet"))
    story.append(KeepTogether(heading))
    story.extend(paragraph("- " + text, "bullet") for text in job["bullets"][1:])
story.append(paragraph("SKILLS", "section"))
for group in profile["skills"]:
    story.append(Paragraph(f'<b>{clean(group["label"])}:</b> {clean(", ".join(group["items"]))}', styles["body"]))
story.extend([paragraph("EDUCATION", "section"), paragraph(profile["education"])])
SimpleDocTemplate(str(output), pagesize=letter, rightMargin=36, leftMargin=36,
                  topMargin=32, bottomMargin=30, title="Ixax Tavarez - Lead Developer",
                  author="Ixax Tavarez", subject="Professional resume",
                  pageCompression=1).build(story)
print(f"Built {output}")
