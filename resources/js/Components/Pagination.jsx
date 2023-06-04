import { Link } from "@inertiajs/inertia-react";

const Pagination = ({meta}) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group px-2">
            {prev && <Link href={prev} className="btn btn-ghost">«</Link> }
            <button className="btn btn-ghost">{current}</button>
            {next && <Link href={next} className="btn btn-ghost">»</Link> }
        </div>
    )
}

export default Pagination