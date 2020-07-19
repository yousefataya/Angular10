import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { AnimationController } from '@ionic/angular';
import { AnimateTimings } from '@angular/animations';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit, AfterViewInit {
  @ViewChild('favIcon', { static: false, read: ElementRef }) favIcon: ElementRef;

  public contact: Contact;
  public favState = false;
  public favOnAnimation: AnimateTimings;
  public favOffAnimation: AnimateTimings;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private animationCtrl: AnimationController
  ) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getContactById(parseInt(id, 10))
    .subscribe(contact => {
      // if the contact doesn't exists, return to home page
      if (!contact) {
        this.router.navigate(['/home']);
      } else {
        this.contact = contact;
      }
    });
  }

  ngAfterViewInit() {
    console.log('favIcon', this.favIcon);

     this.animationCtrl.create()
    .addElement(this.favIcon.nativeElement)
    .duration(300)
    .afterStyles({
      fill: 'red'
    })
    .afterAddClass('fav')
    .afterClearStyles(['fill'])
    .keyframes([
      { offset: 0, transform: 'scale(1)', opacity: '0.4' },
      { offset: 0.5, transform: 'scale(1.5)', opacity: '0.8' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);

     this.animationCtrl.create()
    .addElement(this.favIcon.nativeElement)
    .duration(500)
    .afterStyles({
      fill: 'grey'
    })
    .afterRemoveClass('fav')
    .afterClearStyles(['fill'])
    .keyframes([
      { offset: 0, transform: 'scale(0.8)', opacity: '0.4' },
      { offset: 0.5, transform: 'scale(0.5)', opacity: '0.8' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ]);
  }

  fav(): void {
    if (this.favState) {
      this.favOnAnimation.duration = 30;
      
    } 

    this.favState = !this.favState;
  }
}
