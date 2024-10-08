import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";

export default function ListingItem({ listing }) {
    const formatAddress = (street, city, state, zipCode) => {
      const components = [street, city, state, zipCode];
      return components.filter(Boolean).join(', ');
    };
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageURLs[0]}
          alt="Listing Cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-secondary">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-primary" />
            <p className="text-sm text-dark-gray truncate w-full">
            {formatAddress(listing.street, listing.city, listing.state, listing.zipCode)}
            </p>
          </div>
          <p className="text-sm text-dark-gray line-clamp-3">
            {listing.description}
          </p>
          <p className="text-secondary mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "sale" && " / month"}
            {listing.type === "rent" && " / day"}
          </p>
          <div className="text-secondary">
            <div className="flex items-center gap-1">
              <FaBed className="text-md w-3 text-secondary" />
              <div className="font-bold text-xs">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Beds`
                  : `${listing.bedrooms} Bed`}
              </div>
              <div className="flex items-center gap-1 mx-2">
              <FaBath className="text-md w-3 text-secondary" />
              <div className="font-bold text-xs">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : `${listing.bathrooms} Bath`}
              </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
