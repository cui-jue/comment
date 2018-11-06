package comment;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;


public class UserDaoImpl extends SqlSessionDaoSupport implements UserDao {
	
	
	@Override
	public User getUserById(int id) throws Exception {
		// TODO Auto-generated method stub
		SqlSession sqlSession = this.getSqlSession();
		User user = sqlSession.selectOne("test.getUserById", id);
		
		return user;
	}

}
