import Link from 'next/link'
import React from 'react'

interface Props {
  title: String
  breadcrumb: String
  url: String
}

const HeadCover = ({ title, breadcrumb, url }: Props) => {
  return (
    <section className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center"
              style={{
                backgroundImage: 'url(assets/images/blog/16by9/09.jpg)',
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
              }}
            >
              {/* Card Image overlay */}
              <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                <div className="w-100 my-auto">
                  <h1 className="text-white display-4">{title}</h1>
                  {/* breadcrumb */}
                  <nav
                    className="d-flex justify-content-center"
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                      <li className="breadcrumb-item">
                        <Link href={`${url}`}>
                          <i className="bi bi-house me-1" /> {breadcrumb}
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">{title}</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeadCover
