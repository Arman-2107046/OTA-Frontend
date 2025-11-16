import { useState } from "react";
import heroImg from "../assets/image.jpg";
import FlightOneWay from "./FlightOneWay";
import FlightRoundWay from "./FlightRoundWay";
import FlightMultiCity from "./FlightMultiCity";
import HotelForm from "./HotelForm";
import TourForm from "./TourForm";
import VisaForm from "./VisaForm";

type MainTab = "flight" | "hotel" | "tour" | "visa";
type FlightMode = "oneway" | "round" | "multi";

const Hero = () => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>("flight");
  const [flightMode, setFlightMode] = useState<FlightMode>("oneway");

  function renderFlightContent() {
    switch (flightMode) {
      case "oneway":
        return <FlightOneWay />;
      case "round":
        return <FlightRoundWay />;
      case "multi":
        return <FlightMultiCity />;
      default:
        return null;
    }
  }

  function renderMainContent() {
    switch (activeMainTab) {
      case "flight":
        return renderFlightContent();
      case "hotel":
        return <HotelForm />;
      case "tour":
        return <TourForm />;
      case "visa":
        return <VisaForm />;
      default:
        return null;
    }
  }

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-blue-900/20" />

      {/* centered wrapper */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="relative w-full max-w-5xl px-4">
          {/* 🔹 Floating main tabs */}
          <div className="absolute inset-x-0 -top-10 mx-auto flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl px-8 py-3 flex gap-8">
              <button
                onClick={() => setActiveMainTab("flight")}
                className={
                  "text-sm font-medium transition pb-2 border-b-2 " +
                  (activeMainTab === "flight"
                    ? "border-yellow-400 text-blue-600"
                    : "border-transparent text-gray-400 hover:text-gray-600")
                }
              >
                ✈️ Flight
              </button>
              <button
                onClick={() => setActiveMainTab("hotel")}
                className={
                  "text-sm font-medium transition pb-2 border-b-2 " +
                  (activeMainTab === "hotel"
                    ? "border-yellow-400 text-blue-600"
                    : "border-transparent text-gray-400 hover:text-gray-600")
                }
              >
                🏨 Hotel
              </button>
              <button
                onClick={() => setActiveMainTab("tour")}
                className={
                  "text-sm font-medium transition pb-2 border-b-2 " +
                  (activeMainTab === "tour"
                    ? "border-yellow-400 text-blue-600"
                    : "border-transparent text-gray-400 hover:text-gray-600")
                }
              >
                🗺️ Tour
              </button>
              <button
                onClick={() => setActiveMainTab("visa")}
                className={
                  "text-sm font-medium transition pb-2 border-b-2 " +
                  (activeMainTab === "visa"
                    ? "border-yellow-400 text-blue-600"
                    : "border-transparent text-gray-400 hover:text-gray-600")
                }
              >
                🛂 Visa
              </button>
            </div>
          </div>

          {/* 🔹 Main white card */}
          <div className="mt-14 bg-white/95 shadow-xl rounded-3xl px-8 py-6">
            {/* Flight sub-tabs */}
            {activeMainTab === "flight" && (
              <div className="flex gap-6 text-sm font-medium mb-4">
                <button
                  onClick={() => setFlightMode("oneway")}
                  className={
                    "flex items-center gap-2 " +
                    (flightMode === "oneway"
                      ? "text-blue-700"
                      : "text-gray-400 hover:text-gray-600")
                  }
                >
                  <span
                    className={
                      "w-4 h-4 rounded-full border flex items-center justify-center " +
                      (flightMode === "oneway"
                        ? "border-blue-600"
                        : "border-gray-300")
                    }
                  >
                    {flightMode === "oneway" && (
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </span>
                  One Way
                </button>

                <button
                  onClick={() => setFlightMode("round")}
                  className={
                    "flex items-center gap-2 " +
                    (flightMode === "round"
                      ? "text-blue-700"
                      : "text-gray-400 hover:text-gray-600")
                  }
                >
                  <span
                    className={
                      "w-4 h-4 rounded-full border flex items-center justify-center " +
                      (flightMode === "round"
                        ? "border-blue-600"
                        : "border-gray-300")
                    }
                  >
                    {flightMode === "round" && (
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </span>
                  Round Way
                </button>

                <button
                  onClick={() => setFlightMode("multi")}
                  className={
                    "flex items-center gap-2 " +
                    (flightMode === "multi"
                      ? "text-blue-700"
                      : "text-gray-400 hover:text-gray-600")
                  }
                >
                  <span
                    className={
                      "w-4 h-4 rounded-full border flex items-center justify-center " +
                      (flightMode === "multi"
                        ? "border-blue-600"
                        : "border-gray-300")
                    }
                  >
                    {flightMode === "multi" && (
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </span>
                  Multi City
                </button>
              </div>
            )}

            {/* actual content */}
            <div className="mt-2">{renderMainContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
