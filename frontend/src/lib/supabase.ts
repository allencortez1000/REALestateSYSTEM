export type MockSupabaseUser = {
  id: string;
  email?: string;
};

const mockAuth = {
  async getSession() {
    return { data: { session: null }, error: null };
  },
  async getUser() {
    return { data: { user: null }, error: null };
  },
  async signInWithPassword() {
    return { data: null, error: null };
  },
  async signOut() {
    return { error: null };
  }
};

export const supabase = {
  auth: mockAuth,
  storage: {
    from() {
      return {
        upload: async () => ({ data: null, error: null }),
        getPublicUrl: () => ({ data: { publicUrl: '' } })
      };
    }
  }
};
