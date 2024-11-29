
# HostelBazzar - Campus Marketplace WebApp

**HostelBazzar** is an online marketplace designed for campus residents to list and sell items. This platform enables users to sell items with specific details like room numbers and features seamless **WhatsApp integration** for direct communication.

# Screenshot 
![image](https://github.com/user-attachments/assets/8d7b641e-4f32-4ab2-bd15-9cc5997ba6e6)

---

## ✨ Features

- **Item Listing**: Users can list items they want to sell with a detailed description.
- **Campus-Specific Marketplace**: Exclusively designed for campus residents with room number integration.
- **High Price Selling**: Allows users to set competitive prices for their items.
- **WhatsApp Integration**: Enables direct communication with buyers/sellers through WhatsApp.
- **S3 Bucket Support**: Images are uploaded and managed using Amazon S3.
- **Scalable and Fast**: Built using modern technologies like Next.js and Prisma.
- **Live Demo**: [Try it live here](https://hostelbazzar.vercel.app/).

---

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn

### Steps to Install

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ManashAnand/HostelBazzar.git
   cd HostelBazzar
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the necessary credentials for your S3 bucket and database.

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Build the Project**:
   ```bash
   npm run build
   ```

6. **Start the Production Server**:
   ```bash
   npm start
   ```

---

## 🛠️ Development

### Running in Development Mode
To test changes locally, use the following command:
```bash
npm run dev
```

This starts a local development server and watches for file changes.

---

## 📁 Project Structure

```plaintext
HostelBazzar/
├── app/                    # S3 uploaded successfully
├── components/             # S3 uploaded successfully
├── lib/                    # Post request using Prisma
├── prisma/                 # Made multi items
├── public/                 # Initial commit from Create Next App
├── react-query/            # Used React Query
├── .dockerignore           # Dockerized my application
├── .env                    # Uploading image to S3 bucket
├── .env.example            # Dockerized my application
├── .eslintrc.json          # Initial commit from Create Next App
├── .gitignore              # Removed .env file
├── Dockerfile              # Dockerized my application
├── README.md               # Initial commit from Create Next App
├── components.json         # Next auth practice
├── jsconfig.json           # Initial commit from Create Next App
├── middleware.js           # Navbar customized
├── next.config.mjs         # Provided WhatsApp web feature
├── package-lock.json       # Uploading image to S3 bucket
├── package.json            # Uploading image to S3 bucket
├── postcss.config.js       # Initial commit from Create Next App
├── tailwind.config.js      # Next auth practice
└── vercel.json             # Cron job configuration
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Create a Pull Request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📞 Support

If you encounter any issues or have questions, feel free to open an [issue](https://github.com/ManashAnand/HostelBazzar/issues) or reach out.

---

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- ORM powered by [Prisma](https://www.prisma.io/)
- Image storage via [Amazon S3](https://aws.amazon.com/s3/)
