import React, { useState } from "react";

const ImageGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [imageSrcs, setImageSrcs] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setIsCompleted(false);
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });
      const data = await response.json();
      setImageSrcs(data.urls);
      setIsLoading(false);
      setIsCompleted(true);
    };

return (
    <div className="flex flex-col items-center justify-center bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-md h-52 ">
      <h1 className="text-4xl text-white mb-4">AI Image Generator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-4">
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 rounded text-white bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-md mb-4 focus:outline-none focus:border-blue-500"
        />
         <button
          type="submit"
          className={`p-2 rounded text-white ${isCompleted ? 'bg-green-500' : 'bg-red-500'} hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200`}
          disabled={isLoading}
        >
          {isLoading ? '...loading' : 'Generate Image'}
        </button>
      </form>
      {/* Simplified Image Grid Container */}
      <div className="flex flex-wrap justify-center ">
        {imageSrcs.map((src, index) => (
          <img key={index} src={src} alt={`Generated ${index}`} className="m-2 w-40 h-40 object-cover cursor-pointer mb-[-12rem]"/>
        ))}
      </div>   
    </div>
    );
};

export default ImageGenerator;

