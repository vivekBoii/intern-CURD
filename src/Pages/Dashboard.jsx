import logo from "../assets/logo.png";
import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";
import dash3 from "../assets/dash3.png";
import dash4 from "../assets/dash4.png";
import dash5 from "../assets/dash5.png";
import dash6 from "../assets/dash6.png";
import dash7 from "../assets/dash7.png";
import user from "../assets/user.png";
import add from "../assets/add.png";
import drop from "../assets/drop.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  AddProject,
  UpdateProject,
  deleteProject,
} from "../Redux/Slices/DashBoardSlice";
import PropTypes from "prop-types";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Project.Projects);
  const Projects = useSelector((state) => state.Project.NewProjects);
  const [openUser, setopenUser] = useState(false);
  const [form, setform] = useState(false);
  const [slider, setslider] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    desc: "",
    author: "",
  });
  useEffect(() => {
    console.log("Updated Projects:", Projects);
  }, [dispatch, Projects]);

  const handleAdd = () => {
    setform(true);
  };

  const isFormValid = () => {
    for (const key in formData) {
      if (formData[key].trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      var len = Projects.length;
      var obj = data[len % 6];
      dispatch(AddProject({ ...obj, ...formData }));
      setform(false);
      setformData({
        name: "",
        desc: "",
        author: "",
      });
      toast.success("Created Successfully");
    } else {
      setform(false);
      setformData({
        name: "",
        desc: "",
        author: "",
      });
      toast.error("Please Fill All Inputs");
    }
  };

  return (
    <>
      <nav className='fixed top-0 right-0 w-full bg-white border-b border-gray-300 '>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start rtl:justify-end'>
              <button
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                onClick={()=>{
                    setslider(!slider)
                }}
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 '
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center ms-3'>
                <div>
                  <button
                    type='button'
                    className='flex text-sm focus:ring-1 focus:ring-gray-300'
                    onClick={() => setopenUser(!openUser)}
                  >
                    <div className='flex flex-col px-3 text-left'>
                      <div>
                        <span className='font-semibold'>Free Trial |</span>{" "}
                        2days left
                      </div>
                      <div className='text-[#FA782F]'>Extend free trail</div>
                    </div>
                    <img
                      className='w-10 h-10 rounded-full'
                      src={user}
                      alt='user photo'
                    />
                    <div className='flex my-auto px-1'>
                      <img className='w-4 h-2' src={drop} alt='' />
                    </div>
                  </button>
                </div>
                <div
                  className={
                    openUser
                      ? "absolute top-10 z-30 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-56 "
                      : "z-30 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  }
                  id='dropdown-user'
                >
                  <div className='px-4 py-3' role='none'>
                    <p className='text-sm text-gray-900 ' role='none'>
                      Neil Sims
                    </p>
                    <p
                      className='text-sm font-medium text-gray-900 truncate '
                      role='none'
                    >
                      Free trail | 2days left
                    </p>
                  </div>
                  <ul className='py-1' role='none'>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
                        role='menuitem'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
                        role='menuitem'
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
                        role='menuitem'
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={slider?'fixed top-0 left-0 z-30 w-64 h-screen transition-transform translate-x-0 bg-white border-r border-gray-300 ':'fixed top-0 left-0 z-30 w-64 h-screen transition-transform bg-white border-r border-gray-300 hidden sm:block'}
      >
        <div>
          <img className='w-24 pt-5 pb-6 mx-auto' src={logo} alt='logo' />
        </div>
        <div className='pt-4 mt-4 space-y-2 font-medium border-t border-gray-300 w-5/6 mx-auto'></div>
        <div className='px-3 pb-5 bg-white flex flex-col h-[calc(100vh-14%)] justify-between'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group'
              >
                <img
                  className='w-5 h-5 scale-150 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash1}
                  alt=''
                />
                <span className='ms-3'>My Projects</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group'
              >
                <img
                  className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash2}
                  alt=''
                />

                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Sample Projects
                </span>
              </a>
            </li>
            <div className=' space-y-10 pt-2 font-medium border-b border-gray-300 w-5/6 mx-auto'></div>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group'
              >
                <img
                  className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash3}
                  alt=''
                />

                <span className='flex-1 ms-3 whitespace-nowrap'>Apps</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group'
              >
                <img
                  className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash4}
                  alt=''
                />

                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Intro to Necleo
                </span>
              </a>
            </li>
          </ul>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group'
              >
                <img
                  className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash5}
                  alt=''
                />

                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Help & Support
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group'
              >
                <img
                  className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash6}
                  alt=''
                />

                <span className='flex-1 ms-3 whitespace-nowrap'>Feedback</span>
              </a>
            </li>
            <li>
              <a
                onClick={()=>{setslider(false)}}
                className='flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group'
              >
                <img
                  className='w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 '
                  src={dash7}
                  alt=''
                />

                <span className='flex-1 ms-3 whitespace-nowrap'>Collapse</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className='p-5 pt-20 sm:p-10 sm:pt-20 sm:ml-64 h-screen bg-[#f8f8f8]'>
        <div className='text-4xl text-black my-4 mb-10'>My Projects</div>
        <div className='flex flex-col'>
          <div
            className='max-w-96 bg-white border border-gray-200 rounded-lg shadow '
            onClick={handleAdd}
          >
            <div className='bg-[#FA782F66] h-52 rounded-lg m-3 flex items-center justify-center hover:bg-[#FA782F88]'>
              <img className='w-16 h-16' src={add} alt='' />
            </div>
            <div className='p-5 py-2'>
              <p className='text-black text-center font-semibold'>
                Create a new project
              </p>
              <p className='text-black text-center font-semibold text-sm pt-2'>
                or try a <span className='text-[#FA782F]'>sample project</span>
              </p>
            </div>
          </div>
          <div className='flex my-10 gap-10 flex-wrap'>
            {Projects &&
              Projects.map((item, index) => {
                return (
                  <>
                    <Card key={index} index={index} {...item} />
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <div
        style={{ display: form ? "block" : "none" }}
        className=' w-full bg-opacity-90 py-10 bg-white bg-blur-md absolute top-0 flex items-center justify-center z-50 min-h-screen'
      >
        <div className='flex bg-white max-w-2xl sm:max-w-xl left-1/2 translate-x-[-50%] border-2 items-center justify-center p-2 mr-4 sm:p-6 py-10 rounded-xl relative z-50'>
          <div className='mx-auto w-full sm:w-[900px] z-50'>
            <div
              className='absolute right-10 cursor-pointer'
              onClick={() => {
                setform(!form);
              }}
            >
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII=' />
            </div>
            <div className='text-2xl text-center mb-10'>New Projects</div>
            <form action='' method='POST'>
              <div className='flex gap-2 sm:gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='Order'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Project
                  </label>
                  <input
                    type='text'
                    name='Project'
                    placeholder='name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={formData.name}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ip'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Author
                  </label>
                  <input
                    type='text'
                    name='Author'
                    id='ip'
                    placeholder='Author'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={formData.author}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        author: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='first_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Description
                  </label>
                  <textarea
                    type='text'
                    name='Description'
                    cols='30'
                    rows='10'
                    placeholder='Description'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={formData.desc}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        desc: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handleSumbit}
                  className='hover:shadow-form rounded-md bg-[#FA782F] py-3 px-8 text-base font-semibold text-white outline-none'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const Card = ({ index, name, download_url, desc }) => {
  const dispatch = useDispatch();
  const [showdel, setshowdel] = useState(false);
  const [show, setshow] = useState(false);
  const [edit, setedit] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    desc: "",
    author: "",
  });
  const changeDel = () => setshowdel(true);
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(UpdateProject({ index, formData }));
    toast.success("Updated successfully");
    setedit(false);
  };

  return (
    <>
      <div
        aria-hidden='true'
        className={
          showdel
            ? " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal h-full bg-gray-400 bg-opacity-50"
            : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-gray-400 bg-opacity-50"
        }
      >
        <div className='relative left-1/2 translate-x-[-50%] p-4 w-full max-w-md h-full md:h-auto'>
          <div className='relative p-4 text-center bg-white rounded-lg shadow sm:p-5'>
            <button
              type='button'
              className='text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center '
              data-modal-toggle='deleteModal'
              onClick={(e) => {
                e.preventDefault();
                setshowdel(false);
              }}
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
            <svg
              className='text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <p className='mb-4 text-gray-500 '>
              Are you sure you want to delete this item?
            </p>
            <div className='flex justify-center items-center space-x-4'>
              <button
                data-modal-toggle='deleteModal'
                type='button'
                onClick={(e) => {
                  e.preventDefault();
                  setshowdel(false);
                }}
                className='py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 '
              >
                No, cancel
              </button>
              <button
                type='submit'
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteProject(index));
                }}
                className='py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 '
              >
                Yes, I&apos;m sure
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          show
            ? " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal h-full bg-gray-400 bg-opacity-50"
            : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full bg-gray-400 bg-opacity-50"
        }
      >
        <div className='relative left-1/2 translate-x-[-50%] p-4 w-full max-w-md h-full md:h-auto'>
          <div className='relative p-4 text-center bg-white rounded-lg shadow sm:p-5'>
            <div
              className='cursor-pointer absolute right-5'
              onClick={() => {
                setshow(false);
              }}
            >
              x
            </div>
            <p className='mb-4 text-gray-500 '>Project - {name}</p>
            <p className='mb-4 text-gray-500 '>Author - {name}</p>
            <img className='h-52 w-full rounded-lg' src={download_url} alt='' />
            <p className='mt-4 text-gray-500 '>Description - {desc}</p>
          </div>
        </div>
      </div>
      <div className='w-96 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition'>
        <div className=' h-52 rounded-lg m-3 '>
          <img className='h-52 w-full rounded-lg' src={download_url} alt='' />
        </div>

        <div className='p-5 py-2 flex justify-between'>
          <button
            className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            onClick={(e) => {
              e.preventDefault();
              setedit(true);
            }}
          >
            Edit
          </button>
          <div>
            <p className='text-black text-center font-semibold'>{name}</p>
            <div
              className='text-blue-600 cursor-pointer text-center font-semibold'
              onClick={(e) => {
                e.preventDefault();
                setshow(true);
              }}
            >
              View
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              changeDel();
            }}
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          >
            Delete
          </button>
        </div>
      </div>
      <div
        style={{ display: edit ? "block" : "none" }}
        className=' w-full bg-opacity-90 py-10 bg-white bg-blur-md absolute top-0 left-0 h-full flex items-center justify-center z-50 '
      >
        <div className='flex bg-white max-w-2xl sm:max-w-xl left-1/2 translate-x-[-50%] border-2 items-center justify-center p-2 mr-4 sm:p-6 py-10 rounded-xl relative z-50'>
          <div className='max-w-sm sm:w-[900px] z-50'>
            <div
              className='absolute right-10 cursor-pointer'
              onClick={() => {
                setedit(!edit);
              }}
            >
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII=' />
            </div>
            <div className='text-2xl text-center mb-10'>Edit Projects</div>
            <form action='' method='POST'>
              <div className='flex gap-2 sm:gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='Order'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Project
                  </label>
                  <input
                    type='text'
                    name='Project'
                    placeholder='name'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={formData.name}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='ip'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Author
                  </label>
                  <input
                    type='text'
                    name='Author'
                    id='ip'
                    placeholder='Author'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={formData.author}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        author: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='mb-5 flex-1'>
                  <label
                    htmlFor='first_name'
                    className='mb-3 block text-base font-medium text-[#07074D]'
                  >
                    Description
                  </label>
                  <textarea
                    type='text'
                    name='Description'
                    cols='30'
                    rows='10'
                    placeholder='Description'
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    value={formData.desc}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        desc: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handleSumbit}
                  className='hover:shadow-form rounded-md bg-[#FA782F] py-3 px-8 text-base font-semibold text-white outline-none'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  download_url: PropTypes.string.isRequired,
};
