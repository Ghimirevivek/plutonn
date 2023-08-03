import React from 'react';
import '../styles/Body.css';
import { MdLogin, MdHome, MdSearch, MdLibraryBooks } from 'react-icons/md';
import { RiCommunityFill } from 'react-icons/ri';

const Body = () => {
  return (
    <main className='main_container'>
      <div className='page_sideBar'>
        <section className='profile_card'>
          <div className='style_logo'>
            <span className='logo_container'>
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABWCAYAAACgqOpHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS+SURBVHgB7ZxBbxtVEMf/qZDghF0ucKHdXHpq6/SOqIMEByrUcEVCciSE6AERiQNCQoqrIorEASQkrgkp4ZoExDlJ4R47/QBe+8SJhE8wfeNdq6kbZ71+M+u39vykkS1tHL/9e3b2vZk3CxiGYRiGYRiGYRiGERgLCBwiqrqXyNmSs2pqA06dxelra2Fh4RQBE5zYTtzIvaw4u41E4CjHx2NnLWd7zg6c+DGM52HvdbbmbJ9kOXLWSH/A+SYVed3ZCenScbYxl6IXKPIw/H3rmBfcydZTT5smHZp1L6fEm0Ni9ryckrCxQ2HC46qiANSnfpRcrjtIpnGhEjtb1p4qqoqdCr2PfHPlaRFDWXA1sdNL8wjlEHoAL4iWtVail6DHBsolNMOhbgdKqIhNyV1+BeWkTkqzFPEwksbpDsoPh5MDCKIhNgsdofzEzm5Jxm/RMJJefhFmg8jZGgQR8+w0fPDso5AFQkGwVy9KebekZzcxW0IzfD5i3i3i2SVbvORFzLulPLuODKH/eXyIO++9gytvvIbKK5f6739/9CuKZMIxsHc3EAqUVERG8vBBk159eeFc42NF4DmGfYSAG0h00Si3tzZGnuTA/j7cJ02ExhDBE4kwUr/o4PajLWTx8Nv70ERoDN4rYu8bpPvFd93L3VHHOTZmUalW0fv3P2ghNIY9d5P0ElzCs2sXHeSTyOL/U93tHkJjqMETL7Hp2Qaakdy4mT3Gt96+DU2ExhCRZ0XH17Mzqy9ff5OdQPvo4wY0ERxDhGnhfukVGoPvHqyPnAXwsSIQGkMD04KSXUxj8Zubfr3/br1/cm++frn//rHylE9hDKKJqbxiF7MiCYcmPNAsixlDmNgF4it20PuhFfA6XxM7HzE88BW7hfnCy7m8ciOUrKhOMD9c9ikieHl2+sVdzAexb7XmJfjDoeQqFODkEFdXer0Yx+02et34ueNXrka4Wau53MdSP/8xTsLJgzamDeVYRY7D6ckJ/fLzT251t5yZ8B82/sz21iYp0cC0oYxKzbiwyFye4mV0XpGH7fq1RY1yW4QQIM8uL/ZkCZHPE13I048ggNRWBk7Q/IiccEy+9+kq/vpjb+TfcBy+88Fd3KgtoVKpOKsmVRUXv3vdLp4ct/Ck3eq/H8W9z7/A9z/kHt5ZVt3NcRMhQEkbR+7Or+vXonM9kr38qy/XcmXk+G8/+6RxQTyv04R0KLRmJ5ogAzgqt8zxe1K6cedc0TmkTMgGQoMm8O5BbnkgxnH7iKTgrQlnrxy+UiaAzydCiNAE3v3n3k4/qe/jzaNgL+f/71GkaEIQ0f3ZVM4+mlHwinERgojms9Pl7Cpmg2UII148SFsjdLc46XNfo0VPszWPNyPWUT52ndAfQgHtPkgWPOTO3mFiCPfRnEWtBpkOmD0kRjmIodhwyqgWfNO4xzeaGGEz6OyNoYh6dT09gVvOdhEmhyhA6MKh8Db1NDHLUJL/7tB06TirY16gxMun8Ywo/t5ZayHMhhIv3yR9T59fkYdJRW84a5EsB5TUSIMQOdQnVtaRNAxxy0CU4+NcruFp3AGSlWCMgCjLs1gHz2GN8OKzWPvPYYXAvg7DMAzDMAzDMAzDMAzDMIx8PAXDnXjodxSdEQAAAABJRU5ErkJggg=='
                alt='user-profile'
                height='60'
                width='60'
              />
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <div>
              <h4
                style={{
                  marginBottom: '3px',
                }}
              >
                You haven't logged in
              </h4>
              <h5
                style={{
                  margin: '0',
                }}
              >
                {' '}
                Take your username now
              </h5>
            </div>
            <p
              style={{
                textAlign: 'center',
                fontSize: '14px',
                padding: '0 2rem',
              }}
            >
              Click the login button and make yourself a part of this wonderful
              community.
            </p>
          </div>
          <div className='login_container'>
            <button className='login_button'>
              <MdLogin className='login_icon' /> Login
            </button>
          </div>
        </section>
        <nav>
          <div>
            <MdHome /> Home
          </div>
          <div>
            <RiCommunityFill /> Community
          </div>
          <div>
            <MdSearch /> Search
          </div>
          <div>
            <MdLibraryBooks /> Courses
          </div>
        </nav>
        <section></section>
      </div>
      <div className='home_content'></div>
      <div className='home_sideBar '></div>
    </main>
  );
};

export default Body;
