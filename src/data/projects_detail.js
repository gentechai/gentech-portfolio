const projects = [
  {
    title: "Bzail Site Selection Tool",
    description: "The Bzail Site Selection Tool is a state-of-the-art, fully automated platform designed for brokers and land developers to search parcels and perform complex analyses using Agentic AI. It reduces manual site selection work from weeks to just a few seconds, with over 95% accuracy.",
    long_description: `The Bzail Site Selection Tool is a state-of-the-art, fully automated platform designed for brokers and land developers to search parcels and perform complex analyses using Agentic AI. It reduces manual site selection work from weeks to just a few seconds, with over 95% accuracy. The system integrates seamlessly with major real estate data providers such as Regrid, Dataplor, and Shovel. Capable of handling terabytes of parcel data, Bzail performs searches at high speed through advanced optimization techniques.

Technical Overview:
To process massive parcel datasets, Bzail leverages AWS services, automating data ingestion with AWS Glue, PySpark with Sedona, EventBridge, S3, and RDS. The backend is developed in Python using FastAPI, supported by PostgreSQL with extensions like PostGIS, pgvector, pg_trgm, and optimized partitioning strategies along with GIN and B-tree indexes.

For AI integration, Bzail employs OpenAI, Anthropic, Gemini, and AWS Bedrock, orchestrated through an optimized agentic structure. Model Context Protocol, RAG, and fine-tuning approaches are used for specialized tasks. On the frontend, Bzail is built with React TypeScript and Mapbox. To efficiently visualize large numbers of parcels, it applies clustering techniques, custom tile layers, and Mapbox Studio for creating geoJSON datasets and tileservers.

Impact & Benefits:
Bzail revolutionizes real estate site selection by combining large-scale geospatial data handling with advanced AI intelligence. It saves weeks of manual effort, delivers accurate and fast results, and empowers brokers and developers with data-driven insights for decision-making.`,
    technologies: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "AWS", "React", "TypeScript", "Mapbox", "OpenAI", "Anthropic", "Gemini", "AWS Bedrock", "PySpark"],
    image: "/src/assets/bzail.png",
    live: "https://app.baizel.ai/",
    video: "https://drive.google.com/file/d/1pUP4oEUDjtzVQiGz8QHPRrX9-7DhLK2o/view?usp=drivesdk"
  },

  {
    title: "End-to-End Guard Service Automation using Zoho CRM & Zoho Books",
    description: "I developed a fully automated guard service quotation and invoicing system to streamline customer onboarding and reduce manual workload for the sales team.",
    long_description: `Client: FastGuard Security Services
Tech Stack: Flask (Backend), React (Frontend), Zoho CRM, Zoho Books, Zoho API, Webhooks

Project Description:
I developed a fully automated guard service quotation and invoicing system to streamline customer onboarding and reduce manual workload for the sales team. A React-based frontend form was embedded on the FastGuard website to capture customer requirements such as service type, number of guards, and duration. The Flask backend processed submissions, fetched pricing details from a dynamic guard pricing list, and calculated quotation data.

The system was integrated with Zoho CRM API to automatically create and send quotations based on inputs, eliminating manual follow-ups. Once a quotation was approved, automation in Zoho Books generated invoices with payment links sent directly to customers. Real-time synchronization and automated workflows were enabled via Zoho APIs and webhooks, ensuring seamless transitions from quotation to invoicing.

Impact & Benefits:
The solution reduced quotation turnaround time from hours to seconds, significantly improving customer experience and operational efficiency. It eliminated repetitive manual tasks, ensured real-time accuracy in pricing and invoicing, and optimized the sales team's productivity.`,
    technologies: ["Flask", "React", "Zoho CRM", "Zoho Books", "Zoho API", "Webhooks"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/gentechai/End-to-End-Guard-Service-Automation-using-Zoho-CRM-Zoho-Books",
    video: "https://youtu.be/drI_J-anbps?si=59KWMAZqoaspKqpJ"
  },

  {
    title: "HubSpot Dropbox Integration",
    description: "A comprehensive integration solution that connects HubSpot CRM with Dropbox, enabling seamless file synchronization, automated document management, and enhanced collaboration workflows.",
    long_description: `I developed a robust integration platform that bridges HubSpot CRM and Dropbox, creating a unified ecosystem for document management and customer relationship workflows.

Key Features Implemented:
- Real-time file synchronization between HubSpot deals/contacts and Dropbox folders
- Automated document generation and storage based on HubSpot triggers
- Custom workflow automation for document approval processes
- Advanced permission management and access controls
- Comprehensive API integration with both platforms
- Real-time notifications and status updates

Technical Implementation:
The solution leverages HubSpot's Operations Hub and Dropbox Business API to create bidirectional data flows. Custom webhooks handle real-time synchronization, while background processing ensures reliable file transfers. The system includes comprehensive error handling, retry mechanisms, and detailed logging for enterprise-grade reliability.

Business Impact:
This integration reduced manual document handling time by 80%, improved team collaboration efficiency, and provided a seamless experience for sales and marketing teams working with customer documents.`,
    technologies: ["Node.js", "HubSpot API", "Dropbox API", "Express.js", "PostgreSQL", "Redis", "Webhooks"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    video: "https://youtu.be/AWGilgp66j0"
  },

  {
    title: "POS AUTOMATION",
    description: "The POS Automation project involved integrating multiple Point of Sale (POS) systems, including NCR Aloha, QuBeyond, Clover, and Square, into the client software.",
    long_description: `By using AWS services like Lambda and API Gateway, the integration allowed real-time synchronization of sales, inventory, and customer data across all systems, providing businesses with a unified platform for managing their operations. AWS Lambda handled event-driven transaction processing, while API Gateway ensured secure communication between client and the POS systems. SAM CLI was utilized to deploy serverless applications efficiently, and Pytest was used to validate functionality with unit and integration tests.`,
    technologies: ["Python", "AWS Cloud Formation", "AWS SAM CLI"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/Clover-POS-third-party-api-intg.git",
    video: "https://youtu.be/blSaRQ2o3ic"
  },

  {
    title: "FinChat: AI-Powered Assistant",
    description: "An AI-powered chatbot designed for financial institutions, FinChat serves as a multi-agent assistant integrated with OpenAI.",
    long_description: `Users can inquire about various banking services, from checking account balances to raising service requests, enhancing customer engagement and support through intelligent automation.`,
    technologies: ["OpenAI", "Python", "AI", "Chatbot", "Financial Services", "Machine Learning", "NLP"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/Finchat.git",
    video: "https://youtu.be/U-jn0PO2mzg"
  },

  {
    title: "ChatPDF Powered by Azure - Automation",
    description: "This application leverages Azure AI alongside other Azure services like Blob Storage, Cognitive Search, and Azure Function App to create an automated AI assistant.",
    long_description: `Users can upload knowledge bases in PDF format, and the AI assistant is automatically generated to answer questions from the provided documents. Originally designed to assist doctors in clinical trials, this tool simplifies the process by automatically retrieving relevant findings from lengthy reports, eliminating the need for manual searches. It greatly enhances efficiency and decision-making in medical research and other document-heavy domains.`,
    technologies: ["Azure AI", "Azure CLI", "Python", "Automation", "Cognitive Search"],
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=600&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/Azure_chatpdf.git"
  },

  {
    title: "SRS Agent: AI-Powered Medical Documentation",
    description: "The SRS Agent is an innovative solution designed to identify deficiencies within Software Requirement Specification (SRS) documents specifically tailored for medical software applications.",
    long_description: `This AI-powered tool leverages OpenAI's capabilities and advanced Natural Language Processing (NLP) techniques to analyze and improve SRS documents. By automating the review process, it replaces traditional manual checking methods, providing users with a refined SRS document after thorough modifications. Built using Python and the python-docx library, this project enhances the accuracy and efficiency of SRS documentation, making it an essential tool for medical software developers and medical professionals alike.`,
    technologies: ["OpenAI", "Python", "NLP", "Medical Software", "AI", "Documentation"],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    github: "https://github.com/dev-PankajK/SRS_medical_softwares.git"
  },

  {
    title: "Peerbie AI Platform Integration",
    description: "I implemented end-to-end AI integration on the Peerbie AI platform using Python and third-party AI APIs. The goal was to enhance task management, workflow automation, and collaboration features by embedding AI-driven intelligence directly into the platform.",
    long_description: `I implemented end-to-end AI integration on the Peerbie AI platform using Python and third-party AI APIs. The goal was to enhance task management, workflow automation, and collaboration features by embedding AI-driven intelligence directly into the platform.

Key Features & Implementations:
I developed an AI Copilot to assist users with queries, updates, and routine interactions. Workflow automation with smart triggers enabled auto-assignments, real-time updates, and SLA rules. Autofill and content generation reduced manual effort by automatically creating descriptions, summaries, and notes. I also integrated advanced NLP and summarization capabilities from APIs like OpenAI and Hugging Face. On the backend, I built Python modules for request handling, asynchronous processing, and error management, while the interface supported prompts, feedback capture, and correction workflows.

Challenges & Solutions:
Managing multiple APIs with different schemas and limits required normalization and orchestration. To ensure performance, I used caching, batching, and horizontal scaling. Validation layers and fallback logic addressed errors and unreliable outputs, while sensitive data was anonymized and protected with strict security controls. For user adoption, manual overrides and a predictable assistant experience were prioritized. I also set up continuous monitoring and feedback loops to address model drift and handled edge cases like ambiguous or multilingual queries with clarifying prompts.

Impact & Benefits:
The integration reduced repetitive work, automated task assignments, and improved reporting consistency. It boosted productivity by freeing teams to focus on higher-value tasks and delivered an improved user experience with instant, reliable AI-powered responses.`,
    technologies: ["Python", "AI APIs", "OpenAI", "Hugging Face", "NLP", "FastAPI", "Asynchronous Processing"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
  },

  {
    title: "RAG-Based Quotation PDF Generator",
    description: "I developed an AI-powered quotation generation system to automate the manual creation of product quotations for a furniture retail business. The system streamlined quotation generation by leveraging a Flask backend integrated with OpenAI's language models.",
    long_description: `Client: Furniture Retail Business
Tech Stack: Flask (Backend), React (Frontend), OpenAI (LLM), Pinecone (Vector DB), PDFKit

Project Description:
I developed an AI-powered quotation generation system to automate the manual creation of product quotations for a furniture retail business. The system streamlined quotation generation by leveraging a Flask backend integrated with OpenAI's language models to process natural language product queries. A React-based frontend dashboard allowed clients to input custom quotation requests and view results dynamically.

Challenges & Solutions:
The main challenge was retrieving the exact product price from Pinecone, since many products had similar names and retrieval often returned multiple options. Token limits also restricted the LLM's ability to disambiguate all results. To solve this, I stored only product names in Pinecone. During queries, the system retrieved 5-10 candidate names, and the LLM selected the correct one. Metadata was then used to fetch accurate product details for quotation generation. This approach ensured precise and reliable quotations.

Impact & Benefits:
The system significantly reduced manual effort for creating quotations, improved retrieval accuracy through RAG and filters, and delivered client-ready PDF quotations in seconds. It enhanced efficiency, minimized errors, and provided a scalable solution for the retail business.`,
    technologies: ["Flask", "React", "OpenAI", "Pinecone", "PDFKit", "RAG", "Vector Database"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
  },

  {
    title: "Remote Photoplethysmography (rPPG) Pipeline",
    description: "I built a remote photoplethysmography (rPPG) pipeline using Mediapipe for face detection and masking. This enabled automatic selection of skin regions of interest (ROI) for reliable signal capture.",
    long_description: `I built a remote photoplethysmography (rPPG) pipeline using Mediapipe for face detection and masking. This enabled automatic selection of skin regions of interest (ROI) for reliable signal capture. I designed a skin segmentation and preprocessing pipeline with adaptive filters to exclude pixels affected by low light, shadows, or poor intensity, reducing noise in the process. From the cleaned ROI, I extracted RGB time-series data and applied a bandpass filter to eliminate unwanted frequency components, improving the signal-to-noise ratio. I then processed the filtered signals to estimate heart rate non-invasively while compensating for motion, lighting changes, and environmental noise. By combining artifact removal, adaptive segmentation, and temporal filtering, I improved signal stability and accuracy for more consistent physiological measurements.

Challenges & Solutions:
Accurate ROI Selection for Face Mask: Extracting precise skin regions was critical, as inaccurate masks produced noisy signals. After evaluating multiple libraries, I found Mediapipe provided the most accurate and consistent results. By using facial landmarks, I generated reliable skin masks, ensuring only relevant regions were included in signal extraction.

Lighting Variations and Dark Pixels: Poor lighting and shadowed pixels introduced instability in heart rate estimation. I addressed this by implementing adaptive skin segmentation, calculating average skin pixel values, and defining valid intensity ranges. Pixels outside this range were excluded, significantly improving the signal-to-noise ratio and measurement accuracy.

Impact & Benefits:
The rPPG pipeline provided a non-invasive, camera-based method for estimating heart rate with improved reliability. Through adaptive segmentation, filtering, and motion compensation, the system delivered stable physiological measurements even in challenging conditions, paving the way for practical remote health monitoring applications.`,
    technologies: ["Python", "Mediapipe", "Computer Vision", "Signal Processing", "OpenCV", "NumPy", "SciPy"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
  }
]

export default projects
