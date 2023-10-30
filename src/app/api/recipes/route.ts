import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

/*
{
    name: 'Rendang',
    image: { path: 'snapedit_1698162024235.png' },
    calories: '300',
    description: 
    'nventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim',
    instructions: 
    '<p>nventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse<br>1. wdwdw</p><p>2. dwd<br>3. wdwd</p>',
    cuisine_type: 'Indonesian'
}
*/
export async function POST(request: Request) {
  const headersLists = headers();
  const session = headersLists.get('Authorization');
  console.log(session);

  if (request.body === null) {
    return NextResponse.json(
      {
        message: 'data must not be null',
      },
      {
        status: 400,
      },
    );
  }
  const body = await request.json();
  console.log(body);
}
