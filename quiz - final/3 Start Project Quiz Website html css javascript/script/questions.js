let questions = [
    {
        numb: 1,
        question: "What does the acronym 'DDoS' stand for?",
        answer: "B) Distributed Denial of Service",
        explan:"B) Distributed Denial of Service  ✔  Explanation: DDoS attacks involve multiple systems flooding the bandwidth or resources of a targeted system, making it unavailable to users.",
        options: [
            "A) Direct Denial of Service",
            "B) Distributed Denial of Service",
            "C) Data Deficiency of Service",
            "D) Defensive Denial of Security"
        ]
    },
    {
        numb: 2,
        question: "Which encryption algorithm is commonly used for securing internet traffic?",
        answer: "A) AES (Advanced Encryption Standard)",
        explan:"A) AES (Advanced Encryption Standard) ✔ Explanation: AES is widely used for securing internet traffic due to its speed and security.",
        options: [
            "A) AES (Advanced Encryption Standard)",
            "B) RSA (Rivest-Shamir-Adleman)",
            "C) MD5 (Message Digest Algorithm 5)",
            "D) DES (Data Encryption Standard)"
        ]
    },
    {
        numb:3,
        question: "What is the purpose of a firewall in cybersecurity?",
        answer: "B) To prevent unauthorized access to or from a private network",
        explan:"B) To prevent unauthorized access to or from a private network ✔ Explanation: Firewalls act as a barrier between a trusted internal network and untrusted external networks, controlling incoming and outgoing network traffic.",
        options: [
            "A) To encrypt data during transmission",
            "B) To prevent unauthorized access to or from a private network",
            "C) To scan for viruses and malware",
            "D) To authenticate users for network access"
        ]
    },
    {
        numb: 4,
        question: "What does the term 'phishing' refer to in cybersecurity?",
        answer: "C) Deceiving individuals to reveal sensitive information",
        explan:"C) Deceiving individuals to reveal sensitive information ✔ Explanation: Phishing involves using deceptive emails or websites to trick individuals into revealing sensitive information like passwords or financial details.",
        options: [
            "A) Gaining unauthorized access to a system",
            "B) Encrypting data for secure transmission",
            "C) Deceiving individuals to reveal sensitive information",
            "D) Disrupting network traffic using malware"
        ]
    },
    {
        numb: 5,
        question: "Which of the following is an example of a strong password?",
        answer: "B) 'P@ssw0rd!'",
        explan:"B) 'P@ssw0rd!' ✔ Explanation: A strong password typically includes a mix of uppercase and lowercase letters, numbers, and special characters.",
        options: [
            "A) 'password123'",
            "B) 'P@ssw0rd!'",
            "C) '123456'",
            "D) 'MyDog'sName123'"
        ]
    },
    {
        numb: 6,
        question: "What is the primary purpose of a Virtual Private Network (VPN)?",
        answer: "D) Providing secure remote access to a private network",
        explan:"D) Providing secure remote access to a private network ✔ Explanation: VPNs create encrypted connections over the internet, allowing users to securely access a private network from remote locations.",
        options: [
            "A) Encrypting data during transmission",
            "B) Protecting against malware attacks",
            "C) Authenticating users for network access",
            "D) Providing secure remote access to a private network"
        ]
    },
    {
        numb: 7,
        question: "Which cybersecurity attack targets software vulnerabilities to gain unauthorized access?",
        answer: "D) Zero-Day Exploit",
        explan:"D) Zero-Day Exploit ✔ Explanation: Zero-day exploits target vulnerabilities that are unknown to the software vendor or have no patch available.",
        options: [
            "A) Social Engineering",
            "B) Brute Force Attack",
            "C) SQL Injection",
            "D) Zero-Day Exploit"
        ]
    },
    {
        numb:8 ,
        question: "What does the term 'malware' stand for?",
        answer: "A) Malicious Software",
        explan:"A) Malicious Software ✔ Explanation: Malware refers to any software intentionally designed to cause damage or gain unauthorized access to a computer system.",
        options: [
            "A) Malicious Software",
            "B) Mobile Repair",
            "C) Manipulated Hardware",
            "D) Mandatory Alert Response"
        ]
    },
    {
        numb: 9,
        question: "What is the purpose of biometric authentication in cybersecurity?",
        answer: "B) Authenticating users based on physical characteristics",
        explan:"B) Authenticating users based on physical characteristics ✔ Explanation: Biometric authentication uses unique physical traits like fingerprints or facial recognition to verify a user's identity.",
        options: [
            "A) Encrypting data during transmission",
            "B) Authenticating users based on physical characteristics",
            "C) Preventing DDoS attacks",
            "D) Detecting malware signatures"
        ]
    },
    {
        numb: 10,
        question: "Which protocol encrypts data transmitted between a web browser and a website?",
        answer: "C) SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
        explan:"C) SSL/TLS (Secure Sockets Layer/Transport Layer Security) ✔ Explanation: SSL/TLS protocols encrypt data transmitted between a web browser and a website, ensuring secure communication.",
        options: [
            "A) HTTP (Hypertext Transfer Protocol)",
            "B) FTP (File Transfer Protocol)",
            "C) SSL/TLS (Secure Sockets Layer/Transport Layer Security)",
            "D) DHCP (Dynamic Host Configuration Protocol)"
        ]
    },
    {
        numb: 11,
        question: "What is the main goal of a white-hat hacker?",
        answer: "B) To perform ethical hacking with permission to improve security",
        explan:"B) To perform ethical hacking with permission to improve security ✔ Explanation: White-hat hackers, also known as ethical hackers, use their skills to identify security vulnerabilities and improve systems with proper authorization.",
        options: [
            "A) To gain unauthorized access to systems for personal gain",
            "B) To perform ethical hacking with permission to improve security",
            "C) To spread viruses and malware",
            "D) To disrupt network services"
        ]
    },
    {
        numb:12 ,
        question: "Which type of cyber attack involves intercepting communication between two parties to steal information?",
        answer: "A) Man-in-the-Middle (MitM) Attack",
        explan:"A) Man-in-the-Middle (MitM) Attack ✔ Explanation: In a MitM attack, an attacker secretly intercepts and possibly alters communication between two parties without their knowledge.",
        options: [
            "A) Man-in-the-Middle (MitM) Attack",
            "B) Ransomware Attack",
            "C) Trojan Horse Attack",
            "D) Buffer Overflow Attack"
        ]
    },
    {
        numb:13 ,
        question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
        answer: "C) To centralize and analyze security event logs",
        explan:"C) To centralize and analyze security event logs ✔ Explanation: SIEM systems collect, store, and analyze log data from various sources to identify and respond to security threats.",
        options: [
            "A) To authenticate users for network access",
            "B) To prevent phishing attacks",
            "C) To centralize and analyze security event logs",
            "D) To encrypt data during transmission"
        ]
    },
    {
        numb: 14,
        question: "Which cybersecurity principle ensures that individuals have appropriate access privileges based on their roles?",
        answer: "A) Least Privilege",
        explan:"A) Least Privilege ✔ Explanation: Least Privilege principle grants users the minimum level of access required to perform their duties, reducing the risk of unauthorized actions or data breaches.",
        options: [
            "A) Least Privilege",
            "B) Defense in Depth",
            "C) Zero Trust",
            "D) Single Sign-On"
        ]
    },
    {
        numb: 15,
        question: "What is a common method to protect sensitive data in storage by converting it into an unreadable format?",
        answer: "B) Encryption",
        explan:"B) Encryption ✔ Explanation: Encryption converts sensitive data into an unreadable format that can only be decrypted with the appropriate key, ensuring its protection during storage or transmission.",
        options: [
            "A) Hashing",
            "B) Encryption",
            "C) Compression",
            "D) Salting"
        ]
    },
    {
        numb: 16,
        question: "What does a VPN tunnel primarily provide in secure communication?",
        answer: "B) End-to-end encryption",
        explan:"B) End-to-end encryption  Explanation: A VPN tunnel encrypts data from the user's device to the destination, ensuring secure and private communication.",
        options: [
            "A) Anonymized browsing",
            "B) End-to-end encryption",
            "C) Protection against phishing attacks",
            "D) Intrusion detection"
        ]
    },
    {
        numb: 17,
        question: "Which cybersecurity attack aims to overload a system by sending excessive traffic, disrupting its services?",
        answer: "C) DDoS Attack",
        explan:"C) DDoS Attack  Explanation: Distributed Denial of Service (DDoS) attacks flood a system with excessive traffic, making it unavailable to legitimate users.",
        options: [
            "A) Phishing Attack",
            "B) Spoofing Attack",
            "C) DDoS Attack",
            "D) Man-in-the-Middle Attack"
        ]
    },
    {
        numb: 18,
        question: "What is the primary goal of using multi-factor authentication (MFA) in cybersecurity?",
        answer: "C) Authenticating users using multiple credentials",
        explan:"C) Authenticating users using multiple credentials Explanation: MFA requires users to provide two or more authentication factors, enhancing security beyond a simple password.",
        options: [
            "A) Encrypting sensitive data",
            "B) Preventing malware attacks",
            "C) Authenticating users using multiple credentials",
            "D) Detecting phishing attempts"
        ]
    },
    {
        numb: 19,
        question: "Which cybersecurity principle involves dividing a network into multiple security zones to add layers of protection?",
        answer: "B) Defense in Depth",
        explan:"B) Defense in Depth Explanation: Defense in Depth strategy involves deploying multiple layers of security controls to protect against various threats.",
        options: [
            "A) Least Privilege",
            "B) Defense in Depth",
            "C) Zero Trust",
            "D) Single Sign-On"
        ]
    },
    {
        numb: 20,
        question: "What is the purpose of a penetration test in cybersecurity?",
        answer: "B) To simulate a cyber attack to identify vulnerabilities",
        explan:"B) To simulate a cyber attack to identify vulnerabilities Explanation: Penetration testing, or pen testing, assesses the security of a system by simulating real-world attacks to discover and address vulnerabilities.",
        options: [
            "A) To encrypt sensitive data",
            "B) To simulate a cyber attack to identify vulnerabilities",
            "C) To authenticate users for network access",
            "D) To prevent phishing attacks"
        ]
    }
];