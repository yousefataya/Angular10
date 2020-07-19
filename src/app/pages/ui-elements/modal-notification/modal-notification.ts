import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
    selector: 'ui-modal-notification',
    templateUrl: './modal-notification.html'
})

export class UIModalNotificationPage {
  closeResult: string;

  constructor(private modalService: NgbModal) {

  }

  open(content : any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  swalPrimary() {
    swal.fire('Question Type', 'description here', 'question');
  }

  swalInfo() {
      swal.fire('Info Type', 'description here', 'info');
  }

  swalSuccess() {
      swal.fire('Success Type', 'description here', 'success');
	}

  swalWarning() {
      swal.fire('Warning Type', 'description here', 'warning');
	}

  swalDanger() {
      swal.fire('Error Type', 'description here', 'error');
	}
}
