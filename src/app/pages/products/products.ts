import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  submitForm() {
    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.productForm.value;

    this.productService.create(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm sản phẩm thành công';
        this.productForm.reset({
          name: '',
          price: '',
        });
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra: ' + (err.message || 'Vui lòng thử lại');
      },
    });
  }
}

