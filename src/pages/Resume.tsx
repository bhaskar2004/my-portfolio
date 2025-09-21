import { useNavigate } from 'react-router-dom';
import ResumeViewer from '../components/ResumeViewer';

const Resume = () => {
  const navigate = useNavigate();

  // Simply render the ResumeViewer without any props
  // since it now uses the window.open approach
  return <ResumeViewer />;
};

export default Resume;