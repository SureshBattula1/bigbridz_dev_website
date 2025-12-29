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
      title: 'Payment Processing',
      description: 'Secure payment gateway integrations with support for multiple payment methods and currencies.',
      image: 'assets/images/finance/finance-payment.jpg'
    },
    {
      icon: 'digital-wallet',
      title: 'Digital Wallets',
      description: 'Mobile wallet applications with secure transaction processing and balance management.',
      image: 'assets/images/finance/finance-wallet.jpg'
    },
    {
      icon: 'loan-management',
      title: 'Loan Management',
      description: 'Comprehensive loan origination, processing, and management systems for financial institutions.',
      image: 'assets/images/finance/finance-loan.jpg'
    },
    {
      icon: 'investment',
      title: 'Investment Platforms',
      description: 'Investment tracking and portfolio management platforms for individuals and institutions.',
      image: 'assets/images/finance/finance-investment.jpg'
    },
    {
      icon: 'banking',
      title: 'Banking Solutions',
      description: 'Core banking systems and digital banking platforms for modern financial institutions.',
      image: 'assets/images/finance/finance-banking.jpg'
    },
    {
      icon: 'compliance',
      title: 'Regulatory Compliance',
      description: 'Compliance management systems ensuring adherence to financial regulations and standards.',
      image: 'assets/images/finance/finance-compliance.jpg'
    }
  ];

  benefits = [
    {
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security measures to protect financial data and transactions.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance features for financial regulations and standards.'
    },
    {
      title: 'Real-Time Processing',
      description: 'High-performance systems for real-time transaction processing and reporting.'
    },
    {
      title: 'Scalable Architecture',
      description: 'Solutions designed to handle growing transaction volumes and user bases.'
    }
  ];
}
