// One-off diagnostic: 5 networking basics + 4 per Security+ domain.
// Tells you where you're starting from, and whether networking needs work before Security+.
window.DIAGNOSTICS = window.DIAGNOSTICS || {};
window.DIAGNOSTICS["SY0-701"] = [
  // Networking basics (the Network+ check)
  { area: "net", q: "Which layer of the OSI model do routers primarily operate at?", options: ["Layer 2 (Data link)", "Layer 3 (Network)", "Layer 4 (Transport)", "Layer 7 (Application)"], answer: 1, why: "Routers forward packets using IP addresses, which is Layer 3." },
  { area: "net", q: "What is the default port for HTTPS?", options: ["80", "22", "443", "3389"], answer: 2, why: "HTTPS uses TCP 443. 80 is HTTP, 22 is SSH, 3389 is RDP." },
  { area: "net", q: "How many usable host addresses are in a /26 IPv4 subnet?", options: ["30", "62", "64", "126"], answer: 1, why: "/26 leaves 6 host bits: 2^6 = 64, minus network and broadcast = 62." },
  { area: "net", q: "Which protocol resolves an IP address to a MAC address on a local network?", options: ["DNS", "DHCP", "ARP", "NAT"], answer: 2, why: "ARP maps IPs to MAC addresses on the local segment." },
  { area: "net", q: "What's the main difference between TCP and UDP?", options: ["TCP is connectionless", "UDP guarantees delivery", "TCP is connection-oriented with acknowledgements; UDP isn't", "UDP only works on IPv6"], answer: 2, why: "TCP sets up a connection and confirms delivery; UDP sends without either." },
  // Domain 1
  { area: 1, q: "A locked server room door is which type of control?", options: ["Detective", "Preventive", "Corrective", "Directive"], answer: 1, why: "A lock stops access, so it's preventive." },
  { area: 1, q: "Which property does a digital signature provide that encryption alone doesn't?", options: ["Confidentiality", "Availability", "Non-repudiation", "Obfuscation"], answer: 2, why: "Signing with a private key proves who sent it." },
  { area: 1, q: "What is the purpose of a salt in password storage?", options: ["Encrypt the password", "Make identical passwords produce different hashes", "Speed up hashing", "Allow password recovery"], answer: 1, why: "Salts defeat rainbow tables by making each hash unique." },
  { area: 1, q: "In change management, what's a backout plan?", options: ["A list of approvers", "Steps to reverse a failed change", "The scheduled change time", "A risk register"], answer: 1, why: "It documents how to undo the change." },
  // Domain 2
  { area: 2, q: "An attacker sends a text message pretending to be a delivery company with a malicious link. What is this?", options: ["Vishing", "Smishing", "Whaling", "Pharming"], answer: 1, why: "SMS phishing is smishing. Vishing is voice." },
  { area: 2, q: "Which threat actor is typically motivated by a political or social cause?", options: ["Hacktivist", "Organised crime", "Insider threat", "Shadow IT"], answer: 0, why: "Hacktivists attack to promote a cause." },
  { area: 2, q: "Entering ' OR 1=1 -- into a login form is an attempt at:", options: ["Cross-site scripting", "Buffer overflow", "SQL injection", "Directory traversal"], answer: 2, why: "It manipulates the SQL query so the condition is always true." },
  { area: 2, q: "A vulnerability unknown to the vendor with no patch available is called:", options: ["Zero-day", "Misconfiguration", "Legacy", "End-of-life"], answer: 0, why: "Zero-day means the vendor has had zero days to fix it." },
  // Domain 3
  { area: 3, q: "Which describes data that is stored on a disk?", options: ["Data in transit", "Data at rest", "Data in use", "Data sovereignty"], answer: 1, why: "Stored data is at rest." },
  { area: 3, q: "In the cloud shared responsibility model for IaaS, who patches the guest operating system?", options: ["The cloud provider", "The customer", "Both equally", "Nobody"], answer: 1, why: "In IaaS the customer manages the OS and above." },
  { area: 3, q: "What does RTO measure?", options: ["Maximum acceptable data loss", "Maximum time to restore a service", "Average time between failures", "Time to detect an incident"], answer: 1, why: "Recovery time objective is how long you can be down. RPO is data loss." },
  { area: 3, q: "Placing a public web server in a screened subnet (DMZ) is an example of:", options: ["Segmentation", "Tokenization", "Load balancing", "Journaling"], answer: 0, why: "It separates public-facing systems from the internal network." },
  // Domain 4
  { area: 4, q: "What is the first phase of the incident response process?", options: ["Detection", "Preparation", "Containment", "Lessons learned"], answer: 1, why: "Preparation comes before anything happens." },
  { area: 4, q: "Which tool collects and correlates logs from many systems?", options: ["SIEM", "DLP", "WAF", "NAC"], answer: 0, why: "A SIEM aggregates and correlates log data." },
  { area: 4, q: "Giving users only the access they need for their job is:", options: ["Separation of duties", "Least privilege", "Job rotation", "Implicit deny"], answer: 1, why: "That's the principle of least privilege." },
  { area: 4, q: "Which uses something you know plus something you have?", options: ["Password and PIN", "Fingerprint and face scan", "Password and authenticator app code", "Username and password"], answer: 2, why: "A password (know) plus a code from your phone (have) is MFA." },
  // Domain 5
  { area: 5, q: "Buying cyber insurance is which risk response?", options: ["Avoid", "Accept", "Transfer", "Mitigate"], answer: 2, why: "Insurance transfers financial risk to another party." },
  { area: 5, q: "ALE is calculated as:", options: ["SLE × ARO", "AV × EF", "ARO ÷ SLE", "SLE + ARO"], answer: 0, why: "Annualised loss expectancy = single loss expectancy × annualised rate of occurrence." },
  { area: 5, q: "Which document defines the expected level of service between a provider and a customer?", options: ["NDA", "SLA", "MOU", "BPA"], answer: 1, why: "A service level agreement sets measurable service levels." },
  { area: 5, q: "A test where staff are sent fake phishing emails is part of:", options: ["Security awareness", "Penetration testing of the network", "Vulnerability scanning", "Change management"], answer: 0, why: "Phishing simulations are a security awareness practice." },
];
