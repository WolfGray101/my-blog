

import ArticleForm from "./ArticleForm";
import { useNavigate } from "react-router";
import ServiceFile from "../../service/service-file";
import { useSelector } from "react-redux";


const serviceFile = new ServiceFile()

const  NewArticle = () => {
  const articles = {}
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.createAcc)

  const onGetArticle = async (data) => {
    await serviceFile.postCreateArticle(data, token)
    localStorage.setItem('current', 1)
    navigate('/')
  }

  return   <ArticleForm 
  titleForm= "Create New Article"
  onGetArticle={onGetArticle} 
  articles = {articles} />
     
}


export default NewArticle;
