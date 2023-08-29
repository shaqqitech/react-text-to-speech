import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const { speak, cancel, speaking, supported } = useSpeechSynthesis();

  const handleSpeak = () => {
    if (supported) {
      speak({ text });
    }
  };

  return (
    <div className="p-24 rounded-lg shadow-lg text-center border-4 border-white bg-gray-700">
      <h2 className="text-2xl font-semibold mb-2 text-white">Text to Speech</h2>
      <textarea
        className="p-2 border rounded w-full h-60 mb-2 bg-gray-600 text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak..."
      />
      <button
        className={`px-4 py-2 rounded ${
          speaking ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        onClick={handleSpeak}
        disabled={speaking}
      >
        {speaking ? "Speaking..." : "Speak"}
      </button>
      {speaking && (
        <button
          className="px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 text-white rounded"
          onClick={cancel}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default TextToSpeech;
