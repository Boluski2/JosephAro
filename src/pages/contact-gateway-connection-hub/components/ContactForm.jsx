import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectTitle: '',
    budget: '',
    timeline: '',
    projectScope: '',
    message: '',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'new-project', label: 'New Project Inquiry' },
    { value: 'collaboration', label: 'Collaboration Opportunity' },
    { value: 'speaking', label: 'Speaking Engagement' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k+', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Project)' },
    { value: '1-2months', label: '1-2 Months' },
    { value: '3-4months', label: '3-4 Months' },
    { value: '6months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const projectScopes = [
    { value: 'website-design', label: 'Website Design & Development' },
    { value: 'brand-identity', label: 'Brand Identity & Logo Design' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other (Please Specify)' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Please enter a valid email';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    if (!formData?.terms) newErrors.terms = 'Please accept the terms and conditions';

    // Project-specific validations
    if (formData?.inquiryType === 'new-project') {
      if (!formData?.projectTitle?.trim()) newErrors.projectTitle = 'Project title is required';
      if (!formData?.budget) newErrors.budget = 'Budget range is required';
      if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
      if (!formData?.projectScope) newErrors.projectScope = 'Project scope is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getFormTitle = () => {
    switch (formData?.inquiryType) {
      case 'new-project':
        return 'Tell me about your project';
      case 'collaboration':
        return 'Let\'s explore collaboration';
      case 'speaking':
        return 'Speaking engagement details';
      default:
        return 'How can I help you?';
    }
  };

  const getResponseTime = () => {
    switch (formData?.inquiryType) {
      case 'new-project':
        return 'I\'ll respond within 24 hours with next steps';
      case 'collaboration':
        return 'I\'ll get back to you within 48 hours';
      case 'speaking':
        return 'I\'ll respond within 24 hours with availability';
      default:
        return 'I\'ll respond within 48 hours';
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl shadow-brand p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. {getResponseTime()}
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              inquiryType: '',
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              projectTitle: '',
              budget: '',
              timeline: '',
              projectScope: '',
              message: '',
              newsletter: false,
              terms: false
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-brand p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Let's Start a Conversation</h2>
        <p className="text-muted-foreground">
          Every great project begins with a conversation. Share your vision, and let's explore how we can bring it to life together.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inquiry Type */}
        <Select
          label="What brings you here today?"
          options={inquiryTypes}
          value={formData?.inquiryType}
          onChange={(value) => handleSelectChange('inquiryType', value)}
          error={errors?.inquiryType}
          required
          placeholder="Select inquiry type"
        />

        {formData?.inquiryType && (
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">{getFormTitle()}</h3>
            <p className="text-sm text-muted-foreground">{getResponseTime()}</p>
          </div>
        )}

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            value={formData?.firstName}
            onChange={handleInputChange}
            error={errors?.firstName}
            required
            placeholder="Your first name"
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            value={formData?.lastName}
            onChange={handleInputChange}
            error={errors?.lastName}
            required
            placeholder="Your last name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
            placeholder="your@email.com"
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
            description="Optional - for urgent project discussions"
          />
        </div>

        <Input
          label="Company/Organization"
          type="text"
          name="company"
          value={formData?.company}
          onChange={handleInputChange}
          placeholder="Your company name (optional)"
        />

        {/* Project-specific fields */}
        {formData?.inquiryType === 'new-project' && (
          <>
            <Input
              label="Project Title"
              type="text"
              name="projectTitle"
              value={formData?.projectTitle}
              onChange={handleInputChange}
              error={errors?.projectTitle}
              required
              placeholder="What should we call this project?"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Project Budget"
                options={budgetRanges}
                value={formData?.budget}
                onChange={(value) => handleSelectChange('budget', value)}
                error={errors?.budget}
                required
                placeholder="Select budget range"
              />
              <Select
                label="Desired Timeline"
                options={timelineOptions}
                value={formData?.timeline}
                onChange={(value) => handleSelectChange('timeline', value)}
                error={errors?.timeline}
                required
                placeholder="When do you need this completed?"
              />
            </div>

            <Select
              label="Project Scope"
              options={projectScopes}
              value={formData?.projectScope}
              onChange={(value) => handleSelectChange('projectScope', value)}
              error={errors?.projectScope}
              required
              placeholder="What type of project is this?"
            />
          </>
        )}

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Message <span className="text-secondary">*</span>
          </label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            placeholder={
              formData?.inquiryType === 'new-project' 
                ? "Tell me about your vision, goals, and any specific requirements or challenges you're facing..." :"Share more details about what you have in mind..."
            }
          />
          {errors?.message && (
            <p className="text-sm text-destructive">{errors?.message}</p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <Checkbox
            label="Yes, I'd like to receive occasional updates about design insights and industry trends"
            checked={formData?.newsletter}
            onChange={(e) => handleInputChange(e)}
            name="newsletter"
          />
          
          <Checkbox
            label="I agree to the terms and conditions and privacy policy"
            checked={formData?.terms}
            onChange={(e) => handleInputChange(e)}
            name="terms"
            error={errors?.terms}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;