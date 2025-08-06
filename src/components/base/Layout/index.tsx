import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function Layout() {
  return (
    <div className="lh-flex lh-flex-col lh-h-[400px] lh-w-[360px] lh-overflow-hidden lh-bg-gradient-to-br lh-from-slate-50 lh-via-gray-50 lh-to-slate-100">
      <Alert>
        <AlertTitle>注意！</AlertTitle>
        <AlertDescription>
          这是基于tailwindcss和shadcn-ui的浏览器插件
        </AlertDescription>
      </Alert>
      <Button>内容popup</Button>
    </div>
  )
}
