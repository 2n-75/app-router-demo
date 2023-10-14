export async function DELETE(request: Request) {
  // 登録が成功したと仮定した場合のレスポンスを返却する
  return Response.json({ message: 'success' });
}
