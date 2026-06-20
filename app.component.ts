// app.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="padding: 20px; max-width: 400px;">
      <h2>Simple Angular Form</h2>

      <!-- Input -->
      <div style="margin-bottom: 10px;">
        <label>Name:</label><br />
        <input
          type="text"
          [(ngModel)]="name"
          placeholder="Enter your name"
        />
      </div>

      <!-- Checkbox -->
      <div style="margin-bottom: 10px;">
        <label>
          <input
            type="checkbox"
            [(ngModel)]="checked"
          />
          Accept Terms
        </label>
      </div>

      <!-- Textarea -->
      <div style="margin-bottom: 10px;">
        <label>Message:</label><br />
        <textarea
          [(ngModel)]="message"
          rows="4"
          placeholder="Write something..."
        ></textarea>
      </div>

      <!-- Dropdown -->
      <div style="margin-bottom: 10px;">
        <label>Choose an option:</label><br />
        <select [(ngModel)]="selectedOption">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      <!-- Button -->
      <button (click)="submitForm()">Submit</button>
    </div>
  `,
})
export class AppComponent {
  name = '';
  checked = false;
  message = '';
  selectedOption = 'Option 1';

  submitForm() {
     alert("Hello! Your button works!");
  }
}