import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productForm: FormGroup;

  // Form state
  loading = false;
  error = '';
  success = '';

  // Products list state
  products: Product[] = [
    { id: 1, name: 'Laptop Dell XPS', price: 25000000 },
    { id: 2, name: 'iPhone 15 Pro', price: 29000000 },
    { id: 3, name: 'Samsung Galaxy S24', price: 22000000 },
    { id: 4, name: 'iPad Air', price: 18000000 },
    { id: 5, name: 'Sony Headphones', price: 5000000 },
  ];
  productsLoading = false;
  productsError = '';
  deleteInProgress: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  getProducts() {
    this.productsLoading = true;
    this.productsError = '';

    this.productService.getAll().subscribe({
      next: (data: any) => {
        this.productsLoading = false;
        this.products = data;
      },
      error: () => {
        this.productsLoading = false;
        this.productsError = 'Không thể tải danh sách sản phẩm';
      },
    });
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
        // Refresh danh sách
        this.getProducts();
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra: ' + (err.message || 'Vui lòng thử lại');
      },
    });
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa sản phẩm này?');
    if (!confirmDelete) return;

    this.deleteInProgress = id;

    this.productService.delete(id.toString()).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== id);
        this.deleteInProgress = null;
        alert('Xóa sản phẩm thành công');
      },
      error: () => {
        this.deleteInProgress = null;
        alert('Xóa sản phẩm thất bại');
      },
    });
  }
}

