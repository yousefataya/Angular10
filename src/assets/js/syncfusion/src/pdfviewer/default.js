this.default = function () {
    // Render the PDF viewer control
    var viewer = new ej.pdfviewer.PdfViewer ({
    documentPath: "PDF_Succinctly.pdf",
    serviceUrl: 'http://localhost:62728/api/pdfviewer'
    });
    ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.Toolbar, ej.pdfviewer.Magnification, ej.pdfviewer.BookmarkView, ej.pdfviewer.ThumbnailView, ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.LinkAnnotation, ej.pdfviewer.Annotation, ej.pdfviewer.FormFields);
    viewer.appendTo('#pdfViewer');
};