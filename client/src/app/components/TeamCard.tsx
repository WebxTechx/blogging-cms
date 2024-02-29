import Image from 'next/image'
import React from 'react'

interface Props {
  memberName: String
  position: String
  ImageUrl: String
}

const TeamCard = ({memberName, position, ImageUrl}:Props) => {
  return (
    <div className="col-sm-6 col-lg-3">
      <div className="text-center">
        {/* Avatar img */}
        <div className="avatar avatar-xxl mb-2">
          <Image
            className="avatar-img rounded-circle"
            src={`${ImageUrl}`}
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
        <h5>{memberName}</h5>
        <p className="m-0">{position}</p>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link px-2 fs-5" href="#">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 fs-5" href="#">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 fs-5" href="#">
              <i className="far fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamCard
