import React, { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import useFetch from '../../hooks/useFetch';
const  PropertySearchBar = () => {
  const {data:division,loading,error} = useFetch('https://bdapi.vercel.app/api/v.1/division')
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedArea, setSelectedArea] = useState('Choose Area');
  const [selectedStatus, setSelectedStatus] = useState('Property Status');
  const [selectedType, setSelectedType] = useState('Property Type');

  const areas = division.data
  const statuses = ['For Sale', 'For Rent', 'Sold', 'Pending'];
  const types = ['Apartment', 'House', 'Villa', 'Condo', 'Land', 'Commercial'];

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleSelect = (dropdown, value) => {
    if (dropdown === 'area') setSelectedArea(value);
    if (dropdown === 'status') setSelectedStatus(value);
    if (dropdown === 'type') setSelectedType(value);
    setOpenDropdown(null);
  };

  const Dropdown = ({ label, options, selected, dropdownKey,ariaLabel }) => (

    <div className="relative flex-1">
      <button
        type='button'
        aria-label={ariaLabel}
        aria-expanded={openDropdown === dropdownKey}
        onClick={() => toggleDropdown(dropdownKey)}
        aria-haspopup="listbox"
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-left text-sm font-normal text-gray-700 hover:border-orange-400 transition-all duration-300 flex items-center justify-between group"
      >
        <span className={`${selected === label ? 'text-gray-400' : 'text-gray-700'} font-nunito`}>
          {selected}
        </span>
        <IoChevronDownOutline 
          aria-hidden="true"
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
            openDropdown === dropdownKey ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {openDropdown === dropdownKey && (
        
        <>
        
          {/* Backdrop */}
          <div 
            className="fixed inset-0" 
            onClick={() => setOpenDropdown(null)}
            aria hidden="true"
          >ol</div>
          
          {/* Dropdown Content */}
          <ul className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-slideDown z-100 "
          role='listbox'
          aria-label={ariaLabel}>
            <div className="py-2 max-h-64 overflow-y-auto">
              {options.map((option, index) => (
                <li key={index} role="option" aria-selected={selected === option}>
                  <button
                  type="button"
                  onClick={() => handleSelect(dropdownKey, option.name)}
                  className={`w-full font font-nunito px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                    selected === option
                      ? 'bg-orange-50 text-orange-500 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                  }`}
                >
                  {option.name}
                </button>
                </li>
              ))}
            </div>
          </ul>
        </>
      )}
    </div>
  );
 if(loading){
  return <p>Data loading...</p>
 }
 if(error){
  return <p>{error}</p>
 }
  return (
    
      <section 
      className="bg-white  shadow-sm p-4 sm:p-6"
      aria-label="Property search filters z-40"
      >
        <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
        role='search'>
          
          {/* Choose Area Dropdown */}
          <Dropdown
            label="Choose Area"
            options={areas}
            selected={selectedArea}
            dropdownKey="area"
            ariaLabel="Select property area or location"
          />

          {/* Property Status Dropdown */}
          <Dropdown
            label="Property Status"
            options={statuses}
            selected={selectedStatus}
            dropdownKey="status"
            ariaLabel={"Select property status - for sale,rent or sold"}
          />

          {/* Property Type Dropdown */}
          <Dropdown
            label="Property Type"
            options={types}
            selected={selectedType}
            dropdownKey="type"
            ariaLabel="Select property type - apartment , house , villa, etc."
          />

          {/* Advanced Filter Button */}
          <button 
          type='button'
            className="w-full sm:w-auto px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center group"
            title="Advanced filters"
            aria-label="Open advances property filters"
          >
            <PiSliders className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
            <span className="sr-only">Advanced Filters</span>
          </button>

          {/* Find Now Button */}
          <button 
          type='submit'
          aria-label='Search properties with selected filters'
          className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap font-poppins">
            FIND NOW
          </button>
        </form>

        {/* Selected Filters Display (Optional) */}
        {(selectedArea !== 'Choose Area' || selectedStatus !== 'Property Status' || selectedType !== 'Property Type') && (
          <aside 
          className="mt-4 pt-4 border-t border-gray-100"
          aria-label='Active search filters'>
            <div className="flex flex-wrap gap-2"  >
              <span id='active-filters-label' className="text-xs text-gray-500 font-medium font-nunito">Active Filters:</span>
              <div className='flex flex-wrap gap-2' role='list' aria-labelledby='active-filters-label'>
                {selectedArea !== 'Choose Area' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full font-nunito"
                role='listitem'>
                  <span aria-label={`Area: ${selectedArea}`}>{selectedArea}</span>
                  <button 
                  type='button'
                    onClick={() => setSelectedArea('Choose Area')}
                    className="hover:text-orange-700"
                    aria-label={`Remove ${selectedArea} filter`}
                  >
                    ×
                  </button>
                </span>
              )}
              </div>
              {selectedStatus !== 'Property Status' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full"
                role='listitem'>
                  <span aria-label={`Area: ${selectedArea}`}>{selectedStatus}</span>
                  <button 
                    type='button'
                    onClick={() => setSelectedStatus('Property Status')}
                    className="hover:text-orange-700"
                    aria-label={`Remove ${selectedStatus} filter`}
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedType !== 'Property Type' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full" role='listitem'>
                  <span aria-label={`Type: ${selectedType}`}>{selectedType}</span>
                  <button 
                    type='button'
                    onClick={() => setSelectedType('Property Type')}
                    className="hover:text-orange-700"
                    aria-label={`Remove ${selectedType} filter`}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </aside>
        )}
      
        {/* Animation Styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
          
      `}</style>
    
      </section>

    
  );
};

export default PropertySearchBar;