import { ContentApp, Sidebar } from '../../components'
import styles from './AppLayout.module.css'


export const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <ContentApp />
    </div>
  )
}