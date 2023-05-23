import ResumePdf from '../Image/Abdulmalek Al-Aktaa.pdf'

const DownloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePdf;
    link.setAttribute('download', 'Abdulmalek Al-Aktaa.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



export default DownloadResume;