import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; Your Website 2023</div></div>
                    <div className="col-auto">
                        <Link className="small" to="#!">Privacy</Link>
                        <span className="mx-1">&middot;</span>
                        <Link className="small" to="#!">Terms</Link>
                        <span className="mx-1">&middot;</span>
                        <Link className="small" to="#!">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}