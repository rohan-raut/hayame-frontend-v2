import jsPDF from 'jspdf';
import 'jspdf-autotable';
// import { format } from 'date-fns';

const InvoiceGenerator = (bookingDetails) => {

    // Sample vendor data
    const vendorData = {
        vendorName: "Velavan B",
        vendorAddress: "14/203, Kallakulam, Seenapuram",
        vendorPinCode: "638057",
        contactPerson: "Santhosh D",
        contactPersonMobNo: "8993298712",
    }

    // Sample items data
    const itemsData = [
        { description: bookingDetails.skill + " - " + bookingDetails.no_of_hours + " hours", workersCount: bookingDetails.worker_count, totalCost: "RM " + bookingDetails.total_cost },
    ];

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Set document properties
    pdf.setProperties({
        title: "TAX INVOICE"
    })

    // Add images and text to the PDF
    // const callImage = "/Calling.png";

    // const imageUrl = "./logo.png";
    // pdf.addImage(imageUrl, 'PNG', 10, 5, 40, 12);
    pdf.setFontSize(20);
    pdf.setFont('custom', 'bold');
    pdf.text('HAYAME', 13, 12);
    pdf.setFontSize(10);
    pdf.setFont('custom', 'bold');
    pdf.text('TAX INVOICE', 150, 12);

    // Line width in units (you can adjust this)
    pdf.setLineWidth(0.1);

    // Line color (RGB)
    pdf.setDrawColor(200, 200, 200);
    pdf.line(10, 18, 200, 18)
    pdf.text('HAYAME SOLUTIONS SDN BHD', 13, 23)
    pdf.setFont('custom', 'normal');
    pdf.text("31-A(First Floor),", 13, 28)
    pdf.text("JALAN PANGLIMA HITAM M35/M,", 13, 33)
    pdf.text("ALAM IMPIAN, 40470", 13, 38)
    pdf.text("SELANGOR DARUL EHSAN", 13, 43)
    pdf.text("Tel. No: +6012-4343-470", 13, 48)

    pdf.line(10, 50, 200, 50)
    pdf.setFont('Newsreader', 'bold')
    pdf.text('Bill To:', 13, 55)
    pdf.setFont('Newsreader', 'bold')
    pdf.text(bookingDetails.customer_name, 13, 60)
    pdf.text('Phone: ' + bookingDetails.customer_phone, 13, 65)
    pdf.text('Invoice No: ' + bookingDetails.booking_id, 13, 70)


    // Generate AutoTable for item details
    const itemDetailsRows = itemsData?.map((item, index) => [
        (index + 1).toString(),
        item.description?.toString(),
        item.workersCount?.toString(),
        item.totalCost?.toString(),
    ]);
    const itemDetailsHeaders = ['ITEM', 'DESCRIPTION', 'WORKERS', 'Total'];
    const columnWidths = [15, 120, 30, 23]; // Adjust column widths as needed
    // Define table styles
    const headerStyles = {
        fillColor: [240, 240, 240],
        textColor: [0],
        fontFamily: 'Newsreader',
        fontStyle: 'bold',
    };

    pdf.setFont('Newsreader');
    const itemDetailsYStart = 88;
    pdf.autoTable({
        head: [itemDetailsHeaders],
        body: itemDetailsRows,
        startY: itemDetailsYStart, // Adjust the Y position as needed
        headStyles: {
            fillColor: headerStyles.fillColor,
            textColor: headerStyles.textColor,
            fontStyle: headerStyles.fontStyle,
            fontSize: 10, // Adjust the font size as needed
            font: 'Newsreader', // Set the font family
            halign: 'left',
        },
        columnStyles: {
            0: { cellWidth: columnWidths[0] }, // Adjust column widths as needed
            1: { cellWidth: columnWidths[1] },
            2: { cellWidth: columnWidths[2] },
            3: { cellWidth: columnWidths[3] },
        },
        alternateRowStyles: { fillColor: [255, 255, 255] },
        bodyStyles: {
            fontSize: 10, // Adjust the font size for the body
            font: 'Newsreader', // Set the font family for the body
            cellPadding: { top: 1, right: 5, bottom: 1, left: 2 }, // Adjust cell padding
            textColor: [0, 0, 0], // Set text color for the body
            rowPageBreak: 'avoid', // Avoid row page breaks
        },
        margin: { top: 10, left: 13 },
    });

    // Add summary and page numbers
    const summaryYStart = pdf.internal.pageSize.getHeight() - 50;

    pdf.setFont('Newsreader', 'noraml')
    pdf.text('For remittance by cheque should be crossed "A/C PAYEE ONLY" and payable to "HAYAME SOLUTIONS SDN BHD"', 13, summaryYStart + 20)
    pdf.text('Bank and Account No: CIMB (A/C No: 8605792735)', 13, summaryYStart + 24)
    pdf.text('Advise us of any error or omission within 7 days from the billing date', 13, summaryYStart + 28)
    pdf.setFont('Newsreader', 'bold')
    pdf.text('THIS IS A COMPUTER GENERATED TAX INVOICE, NO AUTHORISED SIGNATURE REQUIRED', 13, summaryYStart + 35)


    // Save the PDF 
    pdf.save(`invoice.pdf`);

    // pdf open in a new tab
    // const pdfDataUri = pdf.output('datauristring');
    // const newTab = window.open();
    // newTab?.document.write(`<iframe width='100%' height='100%' src='${pdfDataUri}'></iframe>`);
};


export default InvoiceGenerator