import React from "react";

const LocationMap = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl my-5 text-blue-600 font-medium font-[font2]">Google Map</h2>
        <iframe
        className="border w-full h-[40vh] lg:h-[75vh]  mt-5 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.5963717384075!2d85.33661310065783!3d23.3202495319458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1002d0fdc47%3A0x4ce760b2160fb3a5!2sVK%20CRICKET%20CLUB!5e1!3m2!1sen!2sin!4v1745044051030!5m2!1sen!2sin"
          
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
