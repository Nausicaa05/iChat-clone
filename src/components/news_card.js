import React from 'react'
import { Link } from 'react-router-dom'

function news_card({img , title , description}) {
  return (
    <article
    className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
    >
    <img
        alt="Office"
        src={img}
        className="h-56 w-full object-cover"
    />

    <div className="p-4 sm:p-6">
        <Link to="">
        <h3 className="text-lg font-medium text-gray-900">
            {title}
        </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {description}
        </p>

        <Link
        to=""
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
        Find out more

        <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
        >
            &rarr;
        </span>
        </Link>
    </div>
    </article>

  )
}

export default news_card