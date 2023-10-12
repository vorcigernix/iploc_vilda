export function GeoDetail(props: GeoDetailProps) {
    return <div className="mt-8">
        <h2 className="text-xl font-medium">Geolocation Info:</h2>
        <div className="mt-4 p-6 border border-zinc-200 rounded-md bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-800">
            <p className="text-sm">IP Address: {props.ip} </p>
            <p className="text-sm">Country: {props.country} </p>
            <p className="text-sm">Region: {props.region}</p>
            <p className="text-sm">City: {props.city}</p>
            <p className="text-sm">Latitude: {props.lat}</p>
            <p className="text-sm">Longitude: {props.long}</p>
        </div>
    </div>;
}

export type GeoDetailProps = {
    ip: string;
    country: string;
    region: string;
    city: string;
    lat: string;
    long: string;
}