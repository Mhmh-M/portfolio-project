
function Footer() {
    return (
        <footer className="flex items-center md:justify-between pb-[1.9rem] flex-col md:flex-row gap-8 md:gap-0">
            <ul className="flex gap-4 ">
                <li><a className="text-[0.9rem]" href="#">About</a></li>
                <li><a className="text-[0.9rem]" href="#">Projects</a></li>
                <li><a className="text-[0.9rem]" href="#">Contact</a></li>
            </ul>
            <p>2023 Spencer Sharp. All rights reserved</p>
        </footer>
    )
}

export default Footer