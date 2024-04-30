import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student-.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students: Student[] = [];

  formGroupStudent: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: StudentService
  ){
    this.formGroupStudent = formBuilder.group({
        id : [''],
        name : [''],
        course : ['']
    })
  }
  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.service.getStudents().subscribe({
        next: data => this.students = data
    });
  }
  save(){
    this.service.save(this.formGroupStudent.value).subscribe({
      next: data => this.students.push(data)
    });
  }
}

