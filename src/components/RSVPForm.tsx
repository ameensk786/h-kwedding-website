import React, { useState } from 'react';
import { rsvpDeadline } from '../data/weddingData';
import { formatDate } from '../utils/dateUtils';
import { RSVPFormData } from '../types';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attending: false,
    guestCount: 1,
    dietaryRestrictions: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: target.checked });
    } else if (name === 'guestCount') {
      setFormData({ ...formData, [name]: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the data to a server here
      console.log('Form Data:', formData);
      setSubmitted(true);
      setSubmitting(false);
    }, 1500);
  };
  
  if (submitted) {
    return (
      <div className="text-center py-12 px-4 bg-wedding-cream rounded-lg shadow-md max-w-lg mx-auto">
        <h3 className="text-2xl font-serif text-wedding-navy mb-4">Thank You!</h3>
        <p className="text-gray-700 mb-6">
          We've received your RSVP and look forward to {formData.attending ? 'celebrating with you!' : 'celebrating even though you cannot attend.'}
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="inline-block bg-wedding-gold text-wedding-navy px-6 py-2 rounded-sm font-sans uppercase tracking-wider text-sm hover:bg-opacity-80 transition-all"
        >
          Edit Response
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
      <h3 className="text-2xl font-serif text-wedding-navy mb-4">Will You Attend?</h3>
      <p className="text-gray-600 text-sm mb-6">
        Please respond by {formatDate(rsvpDeadline)}
      </p>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
        />
      </div>
      
      <div className="mb-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="attending"
            checked={formData.attending}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-wedding-gold"
          />
          <span className="ml-2 text-gray-700">I will attend</span>
        </label>
      </div>
      
      {formData.attending && (
        <>
          <div className="mb-4">
            <label htmlFor="guestCount" className="block text-gray-700 font-medium mb-2">
              Number of Guests (including yourself) *
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="dietaryRestrictions" className="block text-gray-700 font-medium mb-2">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
              placeholder="Vegetarian, vegan, allergies, etc."
            />
          </div>
        </>
      )}
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message to the Couple
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-wedding-gold"
          placeholder="Any wishes or notes for us"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={submitting}
        className={`w-full bg-wedding-gold text-wedding-navy px-6 py-3 rounded-sm font-sans uppercase tracking-wider text-sm hover:bg-opacity-80 transition-all ${
          submitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {submitting ? 'Sending...' : 'Submit RSVP'}
      </button>
    </form>
  );
};

export default RSVPForm;