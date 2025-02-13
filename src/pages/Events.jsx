import React from "react";
import { Link } from "react-router-dom";
import jazz from "../assets/jazznight.jpg";
import musicfest from "../assets/musicfest.jpg";
import rock from "../assets/rock.jpg";
import electronic from "../assets/electronic.jpg";
import rhythm from "../assets/rhythm.jpg";
import otwo from "../assets/otwo.jpg";
import olympic from "../assets/olympic.jpg";
import grant from "../assets/grant.jpg";
import opera from "../assets/opera.jpg";
import redrocks from "../assets/redrocks.jpg";
import ryman from "../assets/ryman.jpg";
import zoukout from "../assets/zoukout.jpg";

const events = [
  { id: 1, title: "Music Festival 2025", location: "\ud83d\udccdNew York, USA", date: "\ud83d\udcc6March 15, 2025", image: musicfest },
  { id: 2, title: "Jazz Night", location: "\ud83d\udccdParis, France", date: "\ud83d\udcc6April 20, 2025", image: jazz },
  { id: 3, title: "Rock Concert", location: "\ud83d\udccdLondon, UK", date: "\ud83d\udcc6May 10, 2025", image: rock },
  { id: 4, title: "Electronic Fest", location: "\ud83d\udccdBerlin, Germany", date: "\ud83d\udcc6June 5, 2025", image: electronic },
  { id: 5, title: "Rhythm Of The Night", location: "\ud83d\udccdMaddison Square Garden, New York", date: "\ud83d\udcc6June 5, 2025", image: rhythm },
  { id: 6, title: "Rock Legends Live", location: "\ud83d\udccdThe O2 Arena, London, UK", date: "\ud83d\udcc6June 5, 2025", image: otwo },
  { id: 7, title: "Electronic Fest", location: "\ud83d\udccdGrant Park, Chicago", date: "\ud83d\udcc6June 5, 2025", image: grant },
  { id: 8, title: "Pop Fusion Fest", location: "\ud83d\udccdOlympic Stadium", date: "\ud83d\udcc6June 5, 2025", image: olympic },
  { id: 9, title: "Acoustic Serenade", location: "\ud83d\udccdSydney Opera Stadium", date: "\ud83d\udcc6June 5, 2025", image: opera },
  { id: 10, title: "Electronic Beats Night", location: "\ud83d\udccdZoukOut Festival Ground ", date: "\ud83d\udcc6June 5, 2025", image: zoukout },
  { id: 11, title: "Indie Vibes Live", location: "\ud83d\udccdRyman Auditorium, Nashville", date: "\ud83d\udcc6June 5, 2025", image: ryman },
  { id: 12, title: "Electronic Fest", location: "\ud83d\udccdRed Rocks Amphitheatre", date: "\ud83d\udcc6June 5, 2025", image: redrocks },
];

const Upcoming = () => {
  return (
    <div className="py-20 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {event.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{event.location}</p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">{event.date}</p>
                <Link to="/events">
                  <button className="mt-4 px-6 py-2 cursor-pointer bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 dark:hover:bg-blue-400 transition-all">
                    Get Tickets
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
