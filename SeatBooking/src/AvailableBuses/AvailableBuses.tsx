import { useState } from "react";
import buildings from "../assets/buildings.jpg";
import Button from "../Components/Button/Button";
import SeatSelect from "../SeatSelect/SeatSelect";
interface BusRouteProps {
  route?: string;
  price?: number;
  departureTime?: string;
  arrivalTime?: string;
  duration?: string;
  seatsAvailable?: number;
  distance?: string;
}

const defaultProps: Required<BusRouteProps> = {
  route: "Colombo - Matara EX1-109",
  price: 1240,
  departureTime: "05:20 AM",
  arrivalTime: "07:10 AM",
  duration: "1h 50m",
  seatsAvailable: 41,
  distance: "2.27 KM",
};

const AvailableBuses = (props: BusRouteProps) => {
  const { route, price, departureTime, arrivalTime, duration, seatsAvailable } =
    { ...defaultProps, ...props };
  const [showSeatSelector, setShowSeatSelector] = useState(false);

  const handleSeatSelect = (selectedSeats: number[]) => {
    console.log("Selected seats:", selectedSeats);
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${buildings})`,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="text-white text-4xl font-bold mb-10">
          Online Seat Reservation
        </h1>

        <div className="w-full max-w-4xl bg-slate-900 p-6 sm:p-8 rounded-lg text-white shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4"></div>

          <h3 className="text-base sm:text-lg mb-4">{route}</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 bg-slate-800 rounded-lg mb-4 text-sm sm:text-base divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
            <div className="p-4">
              <div className="text-gray-400 mb-1">DEPARTS</div>
              <div>Peliyagoda {departureTime}</div>
            </div>
            <div className="p-4 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <span>↔</span>
                <div>
                  <div className="text-gray-400 mb-1">DURATION</div>
                  <div>Approx {duration}</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="text-gray-400 mb-1">ARRIVES</div>
              <div>Matara {arrivalTime}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="text-gray-400 text-sm sm:text-base">
                for as low as
              </div>
              <div className="text-2xl sm:text-3xl font-bold">{price} LKR</div>
              <div className="text-gray-400 text-sm">PER SEAT</div>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-2">
              <a href="/seatselect">
                {/* Seat select button */}
                <Button
                  onClick={() => setShowSeatSelector(!showSeatSelector)}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                >
                  {showSeatSelector ? "Hide Seat Selection" : "Book My Seats"}
                </Button>
              </a>
              {showSeatSelector && (
                <div className="mt-8">
                  <SeatSelect
                    totalSeats={42}
                    bookedSeats={[1, 4, 8, 10]}
                    onSeatSelect={handleSeatSelect}
                    pricePerSeat={price}
                  />
                </div>
              )}
              <div className="text-green-500 text-sm sm:text-base">
                {seatsAvailable} Seats Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableBuses;
