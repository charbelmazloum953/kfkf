# simple_form.py

import tkinter as tk
from tkinter import messagebox

# Create window
root = tk.Tk()
root.title("Simple Python Form")
root.geometry("400x850")

# Input
tk.Label(root, text="Name:").pack()
name_entry = tk.Entry(root, width=30)
name_entry.pack(pady=5)

# Checkbox
checked_var = tk.BooleanVar()
checkbox = tk.Checkbutton(root, text="Accept Terms", variable=checked_var)
checkbox.pack(pady=5)

# Text Area
tk.Label(root, text="Message:").pack()
message_text = tk.Text(root, height=5, width=30)
message_text.pack(pady=5)

# Dropdown
tk.Label(root, text="Choose an option:").pack()

options = ["Option 1", "Option 2", "Option 3"]
selected_option = tk.StringVar(value=options[0])

dropdown = tk.OptionMenu(root, selected_option, *options)
dropdown.pack(pady=5)

# Button function
def submit_form():
    name = name_entry.get()
    checked = checked_var.get()
    message = message_text.get("1.0", tk.END).strip()
    option = selected_option.get()

    messagebox.showinfo(
        "Form Data",
        f"Name: {name}\n"
        f"Checked: {checked}\n"
        f"Message: {message}\n"
        f"Selected: {option}"
    )

# Button
submit_button = tk.Button(root, text="Submit", command=submit_form)
submit_button.pack(pady=15)

# Run app
root.mainloo
<img src=