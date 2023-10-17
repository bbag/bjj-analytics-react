// import global.scss file
import './styles/global.scss'

import Calendar from '@/components/blocks/Calendar/Calendar'
import ClassBreakdown from '@/components/blocks/ClassBreakdown/ClassBreakdown'
import ClassList from '@/components/blocks/ClassList/ClassList'
import InjuryHeatmap from './components/blocks/InjuryHeatmap/InjuryHeatmap'
import Layout from '@/components/layout/Layout'
import Progress from './components/blocks/Progress/Progress'

export default function App() {
  return (
    <Layout>
      <Progress />
      <ClassBreakdown />
      <Calendar />
      <InjuryHeatmap />
      <ClassList />
    </Layout>
  )
}
