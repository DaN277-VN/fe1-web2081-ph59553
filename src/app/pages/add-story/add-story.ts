import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', Validators.required],
      views: [0, [Validators.required, Validators.min(0)]],
    });
  }

  get title() {
    return this.addForm.get('title');
  }

  get author() {
    return this.addForm.get('author');
  }

  get views() {
    return this.addForm.get('views');
  }

  submitForm() {
    console.log(this.addForm.value);
  }
}
