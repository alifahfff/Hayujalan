import { Link } from "@inertiajs/inertia-react";

const Pagination = ({meta}) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div class="btn-group px-2">
            {prev && <Link href={prev} class="btn btn-ghost">«</Link> }
            <button class="btn btn-ghost">{current}</button>
            {next && <Link href={next} class="btn btn-ghost">»</Link> }
        </div>
    )
}

export default Pagination