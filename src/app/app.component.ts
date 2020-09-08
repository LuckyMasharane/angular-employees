import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(public dialog: MatDialog) {}

  employees =[{empName:"Vusi",empSurname:"Ngomane",empPosition:"front-end Developer",empAge:19,empImage:"https://images.pexels.com/photos/1648413/pexels-photo-1648413.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1648413.jpg&fm=jpg"},{empName:"Lucky",empSurname:"Ndlami",empPosition:"Developer",empAge:20,empImage:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"},
  {empName:"December",empSurname:"Makhanya",empPosition:"Mobile Developer",empAge:24,empImage:"https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3775534.jpg&fm=jpg"},
  {empName:"Lwandle",empSurname:"Khoza",empPosition:"Developer",empAge:29,empImage:"https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?cs=srgb&dl=pexels-graham-wizardo-1081188.jpg&fm=jpg"},
  {empName:"Evans",empSurname:"Mabaso",empPosition:"Senior Developer",empAge:30,empImage:"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3785077.jpg&fm=jpg"},
  
  {empName:"Goodman",empSurname:"Mhlongo",empPosition:"Back-end Developer",empAge:25,empImage:"https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842569.jpg&fm=jpg"},
  {empName:"Fayve",empSurname:"Malale",empPosition:"Devs Ops",empAge:31,empImage:"https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?cs=srgb&dl=pexels-tim-savage-903661.jpg&fm=jpg"},
  {empName:"Wandile",empSurname:"Nyoni",empPosition:"Developer",empAge:28,empImage:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"},
  {empName:"Thabo",empSurname:"Mbatha",empPosition:"Senior Developer",empAge:27,empImage:"https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?cs=srgb&dl=pexels-doug-bolton-1445527.jpg&fm=jpg"}]

   
  openDialog(employees) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const index = this.employees.indexOf(employees,0)
        if (index >-1) {
          this.employees.splice(index,1);
        }
      }
    });
  }
}
