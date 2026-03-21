import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
  ) {
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
    if (this.addForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.addForm.value;

    this.storyService.create(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm truyện thành công';
        this.addForm.reset({
          title: '',
          author: '',
          views: 0,
        });
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra: ' + (err.message || 'Vui lòng thử lại');
      },
    });
  }
}

