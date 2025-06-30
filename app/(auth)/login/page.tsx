import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Selamat Datang!</CardTitle>
        <CardDescription>Silahkan Masuk Untuk Melanjutkan</CardDescription>
      </CardHeader>
    </Card>
  );
}