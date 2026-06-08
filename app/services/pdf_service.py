from fpdf import FPDF

def generate_report(user, prediction, tips):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    pdf.cell(200, 10, "Health Report", ln=True)
    pdf.cell(200, 10, f"User: {user.name}", ln=True)
    pdf.cell(200, 10, f"Result: {prediction.result}", ln=True)
    pdf.multi_cell(0, 10, tips)

    path = f"report_{user.id}.pdf"
    pdf.output(path)
    return path
