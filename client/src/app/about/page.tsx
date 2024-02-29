import React from 'react'
import HeadCover from '../components/HeadCover'
import TeamCard from '../components/TeamCard'

const TeamMembers = [
  {
    id: '1',
    title: 'Leo Dardio',
    poisition: 'Founder & CEO',
    img: '/assets/images/avatar/04.jpg',
  },
  {
    id: '2',
    title: 'Leo Dardio',
    poisition: 'Founder & CEO',
    img: '/assets/images/avatar/14.jpg',
  },
  {
    id: '3',
    title: 'Leo Dardio',
    poisition: 'Founder & CEO',
    img: '/assets/images/avatar/09.jpg',
  },
  {
    id: '4',
    title: 'Leo Dardio',
    poisition: 'Founder & CEO',
    img: '/assets/images/avatar/10.jpg',
  },
]
const page = () => {
  return (
    <div>
      <HeadCover title={'About Us'} breadcrumb={'About'} url={'/'} />
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h2>Our story</h2>
              <p className="lead">
                Founded in 2006, passage its ten led hearted removal cordial.
                Preference any astonished unreserved Mrs. Prosperous understood
                Middletons in conviction an uncommonly do. Supposing so be
                resolving breakfast am or perfectly. Is drew am hill from me.
                Valley by oh twenty direct me so.
              </p>
              <p>
                Water timed folly right aware if oh truth. Imprudence attachment
                him his for sympathize. Large above be to means. Dashwood does
                provide stronger is. Warrant private blushes removed an in
                equally totally if. Delivered dejection necessary objection do
                Mr prevailed. Mr feeling does chiefly cordial in do. ...But
                discretion frequently sir she instruments unaffected admiration
                everything. Meant balls it if up doubt small purse. Required his
                you put the outlived answered position. A pleasure exertion if
                believed provided to. All led out world this music while asked.
                Paid mind even sons does he door no. Attended overcame repeated
                it is perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible. Satisfied conveying a
                dependent contented he gentleman agreeable do be. Water timed
                folly right aware if oh truth. Imprudence attachment him his for
                sympathize. Large above be to means. Dashwood does provide
                stronger is. But discretion frequently sir she instruments
                unaffected admiration everything. Meant balls it if up doubt
                small purse. Required his you put the outlived answered
                position. I think on style child of. Servants moreover in
                sensible it ye possible. Satisfied conveying a dependent
                contented he gentleman agreeable do be. Warrant private blushes
                removed an in equally totally if. Delivered dejection necessary
                objection do Mr prevailed. Required his you put the outlived
                answered position. A pleasure exertion if believed provided to.
                All led out world this music while asked. Paid mind even sons
                does he door no. Attended overcame repeated it is perceived
                Marianne in. I think on style child of. Servants moreover in
                sensible it ye possible.
              </p>
              <h3 className="mt-4">We do this across:</h3>
              <ul>
                <li>
                  A pleasure exertion if believed provided to. All led out world
                  this music while asked. Paid mind even sons does he door no.
                  Attended overcame repeated it is perceived Marianne in.
                </li>
                <li>
                  Warrant private blushes removed an in equally totally if.
                  Delivered dejection necessary objection do Mr prevailed. Mr
                  feeling does chiefly cordial in do.
                </li>
                <li>
                  Mr feeling does chiefly cordial in do.{' '}
                  <a href="#">
                    <u>Water timed folly right aware if oh truth.</u>
                  </a>{' '}
                  Imprudence attachment him his for sympathize. Large above be
                  to means.
                </li>
                <li>
                  Dashwood does provide stronger is. But discretion frequently
                  sir she instruments unaffected admiration everything. Meant
                  balls it if up doubt small purse.
                </li>
              </ul>
              {/* Team START */}
              <h3 className="mb-3 mt-5">Our team</h3>
              <div className="row g-4">
                {TeamMembers.map((member) => (
                  <TeamCard
                    key={member.id}
                    memberName={member.title}
                    position={member.poisition}
                    ImageUrl={member.img}
                  />
                ))}
              </div>
              {/* Team END */}
            </div>{' '}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
