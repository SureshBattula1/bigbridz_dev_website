import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../../common/section-header/section-header.component';
import { IconComponent } from '../../../common/icon/icon.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, IconComponent],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  features = [
    {
      icon: 'payment-processing',
      title: 'Resilient Payment Orchestration',
      description: 'Multi-gateway payment processing with automated fallback routing, webhook idempotency, and automated ledger reconciliation.',
      image: 'assets/images/finance/finance-payment.jpg'
    },
    {
      icon: 'digital-wallet',
      title: 'Digital Wallets & Stored Value',
      description: 'Encrypted digital wallet systems supporting balance top-ups, peer-to-peer transfers, and virtual card issuance.',
      image: 'assets/images/finance/finance-wallet.jpg'
    },
    {
      icon: 'loan-management',
      title: 'Automated Loan Origination',
      description: 'Digital loan lifecycle management: borrower document ingestion, credit scoring rules, repayment scheduling, and automated collection reminders.',
      image: 'assets/images/finance/finance-loan.jpg'
    },
    {
      icon: 'investment',
      title: 'Portfolio & Investment Dashboards',
      description: 'Real-time investment valuation, historical return calculations, asset allocation charts, and automated tax statement generation.',
      image: 'assets/images/finance/finance-investment.jpg'
    },
    {
      icon: 'banking',
      title: 'Core Banking & Open Banking APIs',
      description: 'Secure integration with bank feed APIs, account verification networks, and automated wire transfers.',
      image: 'assets/images/finance/finance-banking.jpg'
    },
    {
      icon: 'compliance',
      title: 'Regulatory Audit & KYC Workflows',
      description: 'Automated identity verification (KYC/AML), tamper-evident audit logs, and compliance reporting for financial authorities.',
      image: 'assets/images/finance/finance-compliance.jpg'
    }
  ];

  benefits = [
    {
      title: 'Bank-Grade Security Standards',
      description: 'Hardware-level encryption keys, multi-factor authentication, strict RBAC, and OWASP-tested defensive code.'
    },
    {
      title: 'Zero-Loss Transaction Integrity',
      description: 'ACID-compliant relational transactions with distributed lock mechanisms to prevent double-spend anomalies.'
    },
    {
      title: 'Low-Latency Processing',
      description: 'Sub-millisecond ledger updates and real-time transaction event streams using Kafka or Redis.'
    },
    {
      title: 'Scalable Microservice Architecture',
      description: 'Independently deployable financial services that scale compute independently as transaction volume grows.'
    }
  ];
}
